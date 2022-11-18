import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

export default function CreateDay() {
    const url = 'http://localhost:3001/days';
    const days = useFetch(url);
    const navigate = useNavigate();

    return (
        <div>
            <h2>현재 일수: {days.length}</h2>
            <button
                onClick={() => {
                    fetch(url, {
                        // create
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            day: days.length + 1,
                        }),
                    }).then((res) => {
                        if (res.ok) {
                            alert('생성이 완료되었습니다');
                            navigate(`/`);
                        }
                    });
                }}>
                day 추가
            </button>
        </div>
    );
}
