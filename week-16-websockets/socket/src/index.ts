import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port:8080});

//event handler
wss.on("connection", function(socket){
    console.log('user connected')
    socket.send("user connected")

    //receiving the messages 
    socket.on("message", (e)=>{
        console.log(e.toString())
        if(e.toString() === "ping"){
            socket.send("pong")
        }
    })
})