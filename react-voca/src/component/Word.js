import { useState } from 'react';

export default function Word({ word }) {
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);
    return (
        <tr className={isDone ? 'off' : ''}>
            <td>
                <input
                    type="checkbox"
                    onChange={() => {
                        const url = `http://localhost:3001/words/${word.id}`;
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
                <button className="btn_del">삭제</button>
            </td>
        </tr>
    );
}
