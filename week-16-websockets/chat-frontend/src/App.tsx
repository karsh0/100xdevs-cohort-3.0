import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Join } from "./components/Join";
import { Chat } from "./components/Chat";
import { atom, RecoilRoot } from "recoil";


export const wsAtom = atom({
  key:"socket",
  default:"ws://localhost:8080"
})

function App() {

  return (
    <RecoilRoot>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Join/>}/>
      <Route path="/chat" element={<Chat/>}/>
    </Routes>
    </BrowserRouter>
    </RecoilRoot>
  )
}

export default App
