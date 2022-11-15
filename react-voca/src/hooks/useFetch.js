import { useEffect, useState } from 'react';
// url로부터 state에 해당하는 데이터를 가져와 데이터를 set한후 data를 return 함
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
