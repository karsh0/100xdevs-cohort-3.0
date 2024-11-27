
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState();
  const inputRef = useRef();

  function sendMessage(){
    
    if(!socket){
      return;
    }
    let message = inputRef.current.value;
    //@ts-ignore
    socket.send(message)
  }

  useEffect(()=>{
    const ws = new WebSocket("ws://localhost:8080");
    
    setSocket(ws)

    ws.onmessage = (e) =>{
      alert(e.data)
    }

  },[])

  return (
    <>
     <input ref={inputRef} type="text" placeholder='enter message' />
     <button onClick={sendMessage}>Send</button>
    </>
  )
}

export default App
