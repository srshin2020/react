import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
// import dummy from '../db/data.json';

export default function DayList() {
    console.log('daylist');
    const url = 'http://localhost:3001/days';
    const days = useFetch(url);
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
