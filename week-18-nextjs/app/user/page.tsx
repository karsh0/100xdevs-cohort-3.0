"use client"

import { useState } from "react"

export default function User(){
    const [count, setCount] = useState(0)
    return <div>
        Todo Application
        <button onClick={()=>{ 
            let countAdd = count+1
            setCount(countAdd)}}>Click me {count}</button>
    </div>
}