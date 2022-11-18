import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

export default function CreateWord() {
    const url = 'http://localhost:3001/days';
    const days = useFetch(url);
    const navigate = useNavigate();

    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    return (
        <form
            onSubmit={(e) => {
                const wordsUrl = 'http://localhost:3001/words';
                e.preventDefault();
                console.log(engRef.current.value);
                console.log(korRef.current.value);
                console.log(dayRef.current.value);
                fetch(wordsUrl, {
                    // create
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        eng: engRef.current.value,
                        kor: korRef.current.value,
                        day: dayRef.current.value,
                        isDone: false,
                    }),
                }).then((res) => {
                    if (res.ok) {
                        alert('생성이 완료되었습니다');
                        navigate(`/day/${dayRef.current.value}`);
                    }
                });
            }}>
            <div className="input_area">
                <label>Eng</label>
                <input type="text" placeholder="computer" ref={engRef}></input>
            </div>
            <div className="input_area">
                <label>한글</label>
                <input type="text" placeholder="컴퓨터" ref={korRef}></input>
            </div>
            <div className="input_area">
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map((day) => (
                        <option key={day.id}>{day.day}</option>
                    ))}
                </select>
            </div>
            <button>저장</button>
        </form>
    );
}
