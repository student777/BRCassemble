import React from 'react';
import logo from '../logo.png';
import './App.css';
import Admin from '../admin/admin';
import Member from '../member/member';


export default function App() {
  let isAdmin = Math.random() > 0.5;
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className={ isAdmin? "App-logo spin" : "App-logo" } alt="logo" />
        <div className="flex-box">
            <h3>분당러닝크루 77th 정기런</h3>
            <span>2020.05.31 20:00</span>
            <span>황새울공원</span>
        </div>
        { isAdmin ? <Admin /> : <Member/> }
      </div>
    </div>
  );
}