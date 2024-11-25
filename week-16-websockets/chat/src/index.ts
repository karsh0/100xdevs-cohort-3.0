import {WebSocketServer, WebSocket} from "ws"

const wss = new WebSocketServer({port: 8080});

let userCount = 0;
const allSockets: WebSocket[] = [];

wss.on("connection", function(socket){
    console.log("user connected")
    userCount = userCount + 1;
    allSockets.push(socket)
    socket.on("message", (message)=>{
            allSockets.forEach((s) =>{
            s.send(message + ": server sent")
        })
    })
    console.log("user connected + ", userCount)
})