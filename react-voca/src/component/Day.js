import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import dummy from '../db/data.json';
import Word from './Word';

export default function Day() {
    const { day } = useParams();
    const [wordList, setWords] = useState([]);
    useEffect(() => {
        console.log('useEffect');
        const url = `http://localhost:3001/words?day=${day}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setWords(data);
            });
    }, [day]); // day가 업데이트되었을 때 호출되야 함.

    // const wordList = words.filter((word) => String(word.day) === day);
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
