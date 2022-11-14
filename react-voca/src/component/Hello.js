// css 사용방법
/* css 정의
#1. inline css 정의 
    style={{
        color: 'red',
        backgroundColor: '#eee',
        opacity: 0.5,
    }}
#2. *.css 정의 : 
    App.css
#3. module로 정의 
    import styles from './Welcome.module.css';
*/
// 함수 정의 방법
// #1. 별도로 정의한후 호출
// #2. 바로 정의

// state 정의
// 상태값
// 단순한 변수 선언은 state가 아님.
// state 변경시 화면 자동 refresh

// props
// 속성값
// 넘겨받은 값을 변경할 수 없음 (readonly이므로 에러남)
// 변경을 원한다면 props를 state로 선언해야 함.

import { useState } from 'react';
import Welcome from './Welcome';
import styles from './Hello.module.css';

// props로 값을 넘겨받은
export default function Hello({ age }) {
    // state가 아니므로 변경되어도 화면 업데이트이 자동으로 되지 않음.
    //     let name = 'Kim';

    // useState로 state 선언
    const [name, setName] = useState('Kim');
    const message = age > 19 ? '성인' : '미성년자';
    // props로 넘겨받은 값을 수정하고자 하는 경우엔 state로 선언
    const [myAge, setAge] = useState(age);

    //     console.log(props);
    function showText(e) {
        console.log(e.target.value);
    }
    return (
        <div className={styles.box}>
            <h2
                style={{
                    color: 'red',
                    backgroundColor: '#eee',
                    opacity: 0.5,
                }}>
                Hello App
            </h2>

            <h3>
                {name} : {myAge} : {message}
            </h3>
            {/* #1 함수 별도로 정의 */}
            <input type="text" onChange={showText}></input>
            <button
                // #2 안에서 함수정의
                onClick={() => {
                    const newName = name === 'Kim' ? 'Jane' : 'Kim';
                    setAge(myAge + 1);
                    setName(newName);
                }}>
                change name
            </button>
            {/* state를 props로 넘겨도 됨 */}
            <Welcome name={name} />
        </div>
    );
}
