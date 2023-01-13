import React, {Component, useState} from "react";
import "./../styles/App.css";

const handleClick = () => {
  return document.getElementById('para').innerHTML = "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
}

const App = () => {
  return (
    <div id="main" >
      <p id="para"></p>
      <button id="click" onClick={handleClick}>click</button>
    </div >
  )

}


export default App;
