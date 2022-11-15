import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import dummy from '../db/data.json';

export default function DayList() {
    const [days, setDays] = useState([]);

    // 빈 배열 지정시 한번만 호출됨
    useEffect(() => {
        console.log('use effect 호출');
        const url = 'http://localhost:3001/days';
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setDays(data);
            });
    }, []);
    return (
        <ul className="list_day">
            {days.map((day) => (
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                </li>
            ))}
        </ul>
    );
}
