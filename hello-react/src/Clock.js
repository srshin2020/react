import React  from 'react';
// 내부 객체의 값이 변경되는 경우 state를 사용해야 함
// state를 사용하기 위해서는 class형태로 선언해야 함. 
class Clock extends React.Component{
    // state = {
    //     date : new Date()
    // }
    
    constructor () {
      super();
      this.state = {
        date:new Date()
      }
    }
    tick () {
      this.setState({date: new Date()})
    }
//   mount가 되었을 때 호출
    componentDidMount () {
      this.timerId = setInterval(()=>this.tick(), 1000);
    }
//   unmount가 될 때 호출
    componentWillUnmount(){
      clearInterval(this.timerId);
    }
    render() {
      return (
        <div>
        현재 시각은 {this.state.date.toLocaleTimeString()}입니다.
        </div>
      )
    }
  }
  
export default Clock;