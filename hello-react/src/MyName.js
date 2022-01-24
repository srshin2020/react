import React, { Component } from 'react';

class MyName extends Component {

    // 기본값 설정
    //props로 넘어오는 값이 없을 때 default value
    static defaultProps = {
        name: '기본이름'
    }
    // 자동으로 상속되므로 아래와 같은 코딩은 필요없음
    // constructor (props) {
    //     super(props);
    // }

    //props는 부모로부터 상속받는 변수
    //읽기 전용값임. 
    render() {
        return (
            <div>안녕하세요. 제 이름은 {this.props.name}입니다
            </div>
        )
    }
}
export default MyName; 
