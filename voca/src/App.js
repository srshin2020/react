import './App.css';
import Hello from './component/Hello';
import UserName from './component/UserName';


function App() {

  // const 사용법
  const name = 'Mike'
  const style = {
    color: 'red',
    backgroundColor: 'black'
  }

  // 함수 사용법 
  const showName = () => {
    console.log('show name');
  }
  const showText = (e) => {
    console.log(e.target.value);
  }

  return (
    //css 적용 #1 App으로 class 지정후 css 적용
    <div className="App">
      {/* css 적용 #2 object로 선언  */}
      <h1 style={style}> welcome! {name} </h1>
      <button onClick={showName}>show name</button>
      <button onClick={() => {
        console.log('show age');
      }}>show age</button>
      <input onChange={showText}></input>
      <Hello age={10} /* props로 parameter 를 넘김 */ />
      <Hello age={20} />

    </div >
  );
}

export default App;
