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
