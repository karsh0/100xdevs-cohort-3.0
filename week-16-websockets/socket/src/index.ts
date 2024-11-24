import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port:8080});

//event handler
wss.on("connection", function(socket){
    console.log('user connected')
    socket.send("this is from wss")
})