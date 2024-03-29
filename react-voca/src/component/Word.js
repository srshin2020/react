import { useState } from 'react';

export default function Word({ word: w }) {
    const [word, setWord] = useState(w);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);
    const url = `http://localhost:3001/words/${word.id}`;
    if (word.id === 0) {
        return null;
    }
    return (
        <tr className={isDone ? 'off' : ''}>
            <td>
                <input
                    type="checkbox"
                    onChange={() => {
                        fetch(url, {
                            // update
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ ...word, isDone: !isDone }),
                        }).then((res) => {
                            if (res.ok) {
                                setIsDone(!isDone);
                            }
                        });
                        setIsDone(!isDone);
                    }}
                    checked={isDone}></input>
            </td>
            <td>{word.eng}</td>
            <td>{isShow && word.kor}</td>
            <td>
                <button
                    onClick={() => {
                        setIsShow(!isShow);
                    }}>
                    {!isShow ? '뜻보기' : '숨기기'}
                </button>
            </td>
            <td>
                <button
                    className="btn_del"
                    onClick={() => {
                        if (window.confirm('삭제하시겠습니까? ')) {
                            fetch(url, { method: 'DELETE' }).then((res) => {
                                if (res.ok) {
                                    window.alert('삭제되었습니다.');
                                    setWord({ id: 0 });
                                }
                            });
                        }
                    }}>
                    삭제
                </button>
            </td>
        </tr>
    );
}
