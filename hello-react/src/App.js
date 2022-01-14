import './App.css';
import { Fragment } from 'react';
import MyName from './MyName.js';
import Counter from './Counter.js';

function App() {
  const value = 2;
  const styleTitle = {
    backgroundColor: 'black',
    fontSize: '32px',
    color: 'white'
  }
  return (
    // 여러개의 element를 하기 위해 fragment가 필요함. 
    <Fragment>
    {/* css style을 변수로 정의 가능 */}
    <div style={styleTitle}>react</div>
    <div>{value}</div>
    {/* css style의 class는 className으로 설정*/}
    <div  className='App'> 
    {/* function을 바로 정의하면서 부르기  */}
      {
        (() => {
          if (value === 1) return '1이다'
          if (value === 2) return '2이다'
          if (value === 3) return '3이다'
        })()
      }
    </div>
    {/* component 호출 */}
    <MyName name='react'></MyName>
    {/* 변수없이 호출 */}
    <MyName></MyName>
    <Counter></Counter>
    </Fragment>
  );
}

export default App;
