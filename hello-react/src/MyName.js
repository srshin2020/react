import React, { Component } from 'react';

class MyName extends Component {

    // 기본값 설정
    static defaultProps = {
        name: '기본이름'
    }
    //props는 부모로부터 받은 value
    //읽기 전용값임. 
    render() {
        return (
            <div>안녕하세요. 제 이름은 {this.props.name}입니다
            </div>
        )
    }
}
export default MyName; 
