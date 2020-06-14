import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './child';
import Valuecontext from './valuecontext';
import Parent from './parint';

function App() {
  let [number, setNumber] = useState(45);
  return (
   
      <div >
      Hello World
      <Child></Child>
      <Parent></Parent>

        <button onClick={()=>{ setNumber(++number) }} >Update Number</button>
      </div>
    
   
  );
}

export default App;