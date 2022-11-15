import { useEffect, useState } from 'react';

export default function useFetch(url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log('useEffect');
        fetch(url)
            .then((res) => res.json())
            .then((result) => {
                setData(result);
            });
    }, [url]);
    return data;
}
