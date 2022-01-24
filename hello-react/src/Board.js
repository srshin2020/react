// import React  from 'react';

const User = (props) => {
  return (
    <div>
      <img src={props.user.imageUrl} alt="data"></img>
      {props.user.name}
    </div>
  )
}

// props만 사용하는 경우는 function형 component로도 됨
function Board(props) {
  return (
    <section>
      <User user={props.user}> </User>
      {props.title}
      <hr />
      {props.content}
    </section>
  )
}


export default Board;