import './App.css';
import React, { useState, useEffect} from 'react'
import Countnum from './components/Countnum';
import UseStateObj from './components/UseStateObj'
import UseStateArray from './components/UseStateArray'
import UseEffectDemo from './components/UseEffectDemo'
import UseEffectCleanup from "./components/UseEffectCleanup";
import UseEffectInterval from './components/UseEffectInterval'

function App() {

  const [isShow, setisShow] = useState(true)

  return (
    <div className="App">
      {/* <Countnum/> */}
      {/* <UseStateObj/> */}
      {/* <UseStateArray/> */}
      {/* <UseEffectDemo/> */}

      {/* {isShow && <UseEffectCleanup/>}
      <button onClick={()=>setisShow(false)}>Hide</button> */}

      <UseEffectInterval/>
    </div>
  );
}

export default App;
