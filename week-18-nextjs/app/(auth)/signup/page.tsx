"use client"
import { LabelledInput } from "@/app/components/LabelledInput";
import axios from "axios";
import { useState } from "react";

export default function signup(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    return <div className="w-screen h-screen flex justify-center items-center">
        <div className="max-w-72">
        <span className="text-4xl font-semibold">signup page</span>
        <div className="flex flex-col gap-2 w-full">
            <LabelledInput title="username" placeholder="username" onChange={(e)=> setUsername(e.target.value)}/>
            <LabelledInput title="password" placeholder="password" onChange={(e)=> setPassword(e.target.value)}/>
            <button onClick={()=> axios.post("http://localhost:3000/api/v1/signup",{
                username, password
            })} className="text-xl rounded-xl bg-red-400 px-4 py-3 w-54">Sign up</button>
        </div>
    </div>
    </div>
}