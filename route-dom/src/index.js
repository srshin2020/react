import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes, Link, NavLink, useParams} from 'react-router-dom';


function Home() {
  return (
    <div className="article" >Home....</div>
  )
}


let contents = [
  {id : 0, title : "HTML", description : "HTML is ..."},
  {id : 1, title : "JS", description : "JS is ..."},
  {id : 2, title : "REACT", description : "REACT  is ..."},
]

function Subtopic() {
  let param = useParams(); 
  let content=contents[param.topic_id];
  return (
    <div> {content.description}</div>
  )
}

function Topics() {
  return (
    <div className="container" >
    <div className="article">Topic...</div>
    <ul className="nav">
      {contents.map (index =>(<li key={index.id}><NavLink className="nav-item" to={`${index.id}`}>{index.title}</NavLink></li>))}  
    </ul>
    <Routes >
        <Route path=":topic_id" element={<Subtopic/>} ></Route>
    </Routes>

    </div>
  )
}

function Contact() {
  return (
    <div className="article" >Contact...</div>
  )
}

function App() {
  return (
    <div className="container">
      <ul className="nav">
        <li><NavLink className="nav-item" to="/">Home</NavLink></li>
        <li><NavLink className="nav-item" to="/topics">Topics</NavLink></li>
        <li><NavLink className="nav-item" to="/contact">Contact</NavLink></li>
      </ul>
      <Routes >
        <Route path="/" element={<Home />}/>
        <Route path="/topics/*" element={<Topics />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </div>
  )
}
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
