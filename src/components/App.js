import React, {Component, useState} from "react";
import "./../styles/App.css";

const handleClick = () => {
  let a = document.createElement('p');
  a.id = "para";
  a.innerHTML = "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy";
  return document.getElementById('main').append(a);
}

const App = () => {
  return (
    <div id="main" >
     
      <button id="click" onClick={handleClick}>click</button>
    </div >
  )

}


export default App;
