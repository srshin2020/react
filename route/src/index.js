import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes, Link, NavLink} from 'react-router-dom';


function Home() {
  return (
    <div className="article" >Home....</div>
  )
}

function Topics() {
  return (
    <div className="article" >Topic...</div>
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
        <Route path="/" element={<Home />}></Route>
        <Route path="/topics" element={<Topics />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  )
}
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
