import {WebSocketServer, WebSocket} from "ws"

const wss = new WebSocketServer({port: 8080});

interface User {
    socket: WebSocket,
    roomId: String
}

const allSockets: User[] = [];

wss.on("connection", function(socket){
    socket.on("message", (message)=>{
        let parsedMessage = JSON.parse(message as unknown as string);

        if(parsedMessage.type === "join"){
            allSockets.push({
                socket,
                roomId: parsedMessage.payload.roomId
            })
        }
        if(parsedMessage.type === "chat"){
            const user = allSockets.find((u) => u.socket == socket);
            
            const rooms = allSockets.filter((u) => u.roomId == user?.roomId)
            rooms.map((room)=> room.socket.send(parsedMessage.payload.message))
        }

    })

})