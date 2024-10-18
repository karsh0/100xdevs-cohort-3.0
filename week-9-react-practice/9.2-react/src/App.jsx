import { useEffect, useState } from 'react'
import './App.css'
import ErrorBoundary from './ErrorBoundary'

function App() {
//   const [count, setcount] = useState(0);
//   const [start, setstart] = useState(false);

//   function countHandler(){
//      {start? setcount(count => count+1): setcount(0)}
//   }

//   useEffect(function(){
//     console.log("above interval")
//     const interval = setInterval(countHandler, 1000);

//     return () => clearInterval(interval)
//   },[start])


//   function startWatch(){
//     setstart(true)
//   }
//   function stopWatch(){
//     setstart(false)
//   }

//   return (
//     <div style={{display:"flex", alignItems:"center", gap:5}}>
//      {start? <div>{count}</div>:null}
//       <button onClick={startWatch}>START</button>
//       <button onClick={stopWatch}>STOP</button>
//     </div>
//  )
return(
  <ErrorBoundary/>
)
}
export default App
