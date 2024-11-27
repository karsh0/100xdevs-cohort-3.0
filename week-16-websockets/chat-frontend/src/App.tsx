import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Join } from "./components/Join";
import { Chat } from "./components/Chat";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/join" element={<Join/>}/>
      <Route path="/chat" element={<Chat/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
