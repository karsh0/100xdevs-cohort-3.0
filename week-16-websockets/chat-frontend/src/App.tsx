import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Join } from "./components/Join";
import { Chat } from "./components/Chat";
import { useEffect, useRef } from "react";

function App() {

  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    ws.current = new WebSocket('ws://localhost:8080');

    ws.current.onopen = () => {
      console.log('WebSocket connection established');
    };

    return () => {
      ws.current?.close();
    };
  }, []);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Join ws={ws.current}/>}/>
      <Route path="/chat" element={<Chat ws={ws.current}/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
