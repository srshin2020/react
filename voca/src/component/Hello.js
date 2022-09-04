import styles from './Hello.module.css'
import { useState } from 'react';
import UserName from './UserName';

// props는 readonly이므로 수정불가
const Hello = function ({ age }) {
    const [name, setName] = useState('Mike');
    const changeName = () => {
        setName(name === 'Mike' ? 'Jane' : 'Mike');
    }

    return (
        <div>
            {/* css#3 import style object로 사용 */}
            <button onClick={changeName}>change name</button>
            <div className={styles.box}>{name}{age}</div>
            <UserName name={name} />

        </div>
    )
}

export default Hello; 