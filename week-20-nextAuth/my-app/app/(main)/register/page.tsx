"use client"

import axios from "axios"
import { NextResponse } from "next/server"
import { useRef } from "react"

export default function Register(){
    const userRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    async function handleRegister(event: React.FormEvent) {
        event.preventDefault(); // Prevent form from refreshing the page
    
        try {
            const res = await axios.post('http://localhost:3000/api/user/signup', {
                username: userRef.current?.value,
                email: emailRef.current?.value,
                password: passwordRef.current?.value
            });
    
            const data = res.data; // No need to use await on `res.data`
            console.log(data);
        } catch (error) {
            console.error("Error during registration:", error);
        }
        return NextResponse.redirect('/api/auth/signin')
    }
    
    return <div>
        <form action="" onSubmit={handleRegister}>
        <input type="text" className="text-black" placeholder="Enter username" ref={userRef}/>
        <input type="text" className="text-black" placeholder="Enter email" ref={emailRef}/>
        <input type="text" className="text-black" placeholder="Enter password" ref={passwordRef}/>
        <button type="submit">Signup</button>
        </form>
    </div>
}