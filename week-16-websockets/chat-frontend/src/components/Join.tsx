import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const Join = () => {
  const wsRef = useRef<WebSocket | null>(null); 
  const userRef = useRef<HTMLInputElement>(null);
  const roomRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleJoin = () => {
    const username = userRef.current?.value;
    const roomId = roomRef.current?.value;

    if (!username || !roomId) {
      alert("Please enter username and roomId");
      return;
    }

    if (!wsRef.current) {
      wsRef.current = new WebSocket("ws://localhost:8080");
    }

    wsRef.current.onopen = () => {
      wsRef.current?.send(
        JSON.stringify({
          type: "join",
          payload: {
            username: username,
            roomId: roomId,
          },
        })
      );
    };

    navigate('/chat')

    wsRef.current.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <div className="flex flex-col gap-4 p-6 rounded-xl bg-slate-700 text-white w-80">
        <input
          ref={userRef}
          type="text"
          placeholder="Enter your name.."
          className="p-2 rounded-md bg-gray-600 text-white focus:outline-none"
        />
        <input
          ref={roomRef}
          type="text"
          placeholder="Enter roomId"
          className="p-2 rounded-md bg-gray-600 text-white focus:outline-none"
        />
        <button
          onClick={handleJoin}
          className="p-2 rounded-md bg-blue-600 hover:bg-blue-500 transition"
        >
          JOIN ROOM
        </button>
      </div>
    </div>
  );
};
