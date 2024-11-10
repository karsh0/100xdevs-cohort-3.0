import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [display, setdisplay] = useState(false)
  function displayCounter(){
    setdisplay(!display)
  }
  return (
    <>
    <button onClick={displayCounter}>Display counter</button>
    {display?<Counter></Counter>:null}
    </>
  )
}

function Counter(){
  const [count, setcount] = useState(0);

  useEffect(function(){
    setInterval(function(){
      setcount(count => (count+1))
    },1000)
  },[])

  return(
    <div>{count}</div>
  )
}

export default App
