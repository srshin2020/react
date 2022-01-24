import React, { Component} from 'react';
class Counter extends Component {
    //상태 감지를 통해 rendering
    //가변적인 데이터 관리
    state ={
        number :0
    }

    // ()=>{}를 사용하지 않고 함수를 정의한 경우 bind를 해줘야 함!
    // setState()로 바꿔야 render()가 불림.
    constructor (props) {
        super(props);
        this.handleIncrease = this.handleIncrease.bind(this);
    }
    // state 변경은 직접 하지 말고 setState()로
    handleIncrease ()  {
        this.setState({number:this.state.number+1})
    }
    handleDecrease = () => {
        // this.state.number--; // 변수값은 변경되나 rendering이 안됨
        this.setState({number:this.state.number-1})

    }
    render() {
        return(
            <div>
                <h3>카운터</h3>
                <div>값:{this.state.number}</div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        )
    }

}
export default Counter;