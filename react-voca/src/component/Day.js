import { useParams } from 'react-router-dom';
import dummy from '../db/data.json';
import Word from './Word';

export default function Day() {
    const { day } = useParams();
    console.log(day);
    const wordList = dummy.words.filter((word) => String(word.day) === day);
    if (wordList.length === 0) {
        return <div>영어 단어장에 오신 것을 환영합니다! </div>;
    }
    return (
        <div>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                    {wordList.map((word) => (
                        <Word word={word} key={word.id}></Word>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
