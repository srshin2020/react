import React, { Component} from 'react';
class Counter extends Component {
    state ={
        number :0
    }
    constructor (props) {
        super(props);
        this.handleIncrease = this.handleIncrease.bind(this);
    }
    // ()=>{}를 사용하지 않고 함수를 정의한 경우 bind를 해줘야 함!
    // setState()로 바꿔야 render()가 불림.
    handleIncrease ()  {
        this.setState({number:this.state.number+1})
    }
    handleDecrease = () => {
        this.setState({number:this.state.number-1})

    }
    render() {
        return(
            <div>
                <h1>카운터</h1>
                <div>값:{this.state.number}</div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        )
    }

}
export default Counter;