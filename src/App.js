import './App.css';
import React, { useState, useEffect} from 'react'
import Countnum from './components/Countnum';
import UseStateObj from './components/UseStateObj'
import UseStateArray from './components/UseStateArray'
import UseEffectDemo from './components/UseEffectDemo'

function App() {
  return (
    <div>
      {/* <Countnum/> */}
      {/* <UseStateObj/> */}
      {/* <UseStateArray/> */}
      <UseEffectDemo/>
    </div>
  );
}

export default App;
