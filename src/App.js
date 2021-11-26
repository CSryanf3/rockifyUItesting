import './App.css';
import React, {useState, useEffect} from "react";
import Axios from 'axios';

function App() {

  return (
    <div className="App">
      <menu>
        <li> <img src="rockifylogo.ico" width="50px" /> </li>
        <li> Search </li>
        <li> Recommend </li>
        <li> My Likes </li>
      </menu>

    </div>
  );
}

export default App;
