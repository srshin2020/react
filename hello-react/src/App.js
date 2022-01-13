import './App.css';
import { Fragment } from 'react';
import MyName from './MyName.js';
import Counter from './Counter.js';

function App() {
  const value = 2;
  const style = {
    backgroundColor: 'black',
    fontSize: '32px',
    color: 'white'
  }
  return (
    <Fragment>
    <div>react</div>
    <div>{value}</div>
    <div style={style} className='App'>
      {
        (() => {
          if (value === 1) return '1이다'
          if (value === 2) return '2이다'
          if (value === 3) return '3이다'
        })()
      }
    </div>
    <MyName name='react'></MyName>
    <MyName></MyName>
    <Counter></Counter>
    </Fragment>
  );
}

export default App;
