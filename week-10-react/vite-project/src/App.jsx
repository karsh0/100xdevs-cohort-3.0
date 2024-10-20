import { useRef, useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route, Link, useNavigate, Outlet} from "react-router-dom"


function App() {
 const [currentCount, setcurrentCount] = useState(1);
  // const [timer, setTimer] = useState(0);
  const timer = useRef();
  function startClock(){
    let value = setInterval(()=>{
      setcurrentCount(currentCount => currentCount+1);
    },1000)
    // setTimer(currentCount);
    timer.current = value;
  }

  function stopClock(){
    clearInterval(timer.current)
  }
  return (
    <>
 {currentCount}
 <br/>
 <button onClick={startClock}>Start</button>
 <button onClick={stopClock}>Stop</button>
    </>
  )
}

 
export default App
