import './App.css';
import React, { Fragment } from 'react';
import MyName from './MyName.js';
import Counter from './Counter.js';
import Clock from './Clock.js'
import Board from './Board.js'

const board = {
  title: "게시글 제목",
  content: "게시글 내용",
  user: {
    name: "이수민",
    imageUrl: "https://placeimg.com/64/64/any"
  }
}


function App() {
  const value = 2;
  const styleTitle = {
    backgroundColor: 'black',
    fontSize: '16px',
    color: 'white'
  }
  return (
    // 여러개의 element를 하기 위해 fragment가 필요함. 
    <Fragment>
      {/* 1. binding : 변수 사용 */}
      <div>value = {value}</div>

      {/* 2. 스타일 지정 출력 */}
      {/* css style을 변수로 정의 가능 */}
      <div style={styleTitle}>tutorial</div>

      {/* 3. css style의 class는 className으로 설정*/}
      <div className='App'>
      {/* function을 정의하면서 호출 동시에  */}
        {
          (() => {
            if (value === 1) return '1이다'
            if (value === 2) return '2이다'
          })()
        }
      </div>
      {/* inline if 로 출력 */}
      {value == 1? '1이다' : '2이다'}

      {/* 4. component 호출 props로 변수 넘김*/}
      <MyName name='김민우'></MyName>

      {/* 5. 변수없이 호출  default value로 대치됨*/}
      <MyName></MyName>

      {/* state 관리 & react lifecycle api */}
      <Clock></Clock>

      {/* state & event handler & bind 처리  */}
      <Counter></Counter>

      {/* nested component */}
      <Board title={board.title} content={board.content} user={board.user}></Board>
    </Fragment>
  );
}

export default App;
