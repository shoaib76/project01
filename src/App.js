import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Parint from './parint';

function App() {
  let [number, setNumber] = useState(45);
  return (
    <div >
      Hello World
      <Parint num={number}></Parint>
      <button onClick={()=>{ setNumber(++number) }} >Update Number</button>
    </div>
  );
}

export default App;