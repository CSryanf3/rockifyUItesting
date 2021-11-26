import './App.css';
import React, {useState, useEffect} from "react";
import Axios from 'axios';

function App() {

  return (
    <div className="App">
      <menu>
        <li> <img src="rockifylogo.ico" width="50px" /> </li>
        <li> Tracks </li>
        <li> Artists </li>
        <li> Albums </li>
        <li> Advanced Search </li>
      </menu>

    </div>
  );
}

export default App;
