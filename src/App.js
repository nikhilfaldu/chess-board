// App.js

import React from 'react';
import ChessBoard from './components/ChessBoard';
import './App.css';
import logo from "./images/logo3.png";

const App = () => {
  return (
    <div>
       <img src={logo} alt="Logo" className="logo" />
      <h1 style={{ textAlign: 'center' }}>Chess Board</h1>
      <ChessBoard />
      <div className="name">&#169;&nbsp;Developed By Nikhil Faldu</div>
    </div>
  );
};

export default App;
