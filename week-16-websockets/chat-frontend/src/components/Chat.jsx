import { useState } from "react"

export const Chat = ({ws}) =>{

    const [messages, setMessages] = useState(["hi there", "hello"])
  
    return (
    <>
    <div className="h-screen w-full bg-slate-700 felx flex-col justify-between p-10">
    <div className="messages">
    {messages.map((message, index) => (
    <div key={index} className="message text-white p-2 bg-red-400 rounded-xl max-w-fit m-1">
      {message}
    </div>
  ))}
    </div>
    <div className="h-[50px] flex justify-between items-center">
      <input className="w-full px-5 text-xl h-full" type="text" id="messageData" placeholder="Enter message.." />
      <button className="px-5 h-full text-2xl text-white text-center bg-green-600" onClick={
        ()=>{
        const message = document.getElementById("messageData")?.value;
          ws.send(JSON.stringify({
            type:"chat",
            payload:{
            message
            }
          }))
        }
      }>Send</button>

    </div>
    </div>
  </>
    )
}