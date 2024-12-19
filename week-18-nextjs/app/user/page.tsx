"use client"

import axios from "axios";
import { useEffect, useState } from "react"

export default function User(){
    const [data, setdata] = useState();
    const [loading, setloading] = useState(true);

    useEffect(()=>{
        axios.get('https://week-13-offline.kirattechnologoes.workers.dev/api/v1/user/details').then(response =>{
            setdata(data)
            setloading(false)
        })
       
    },[])
    
    if(loading){
        return <div>Loading...</div>
    }

    return <div>
        {data.name}
        {data.email}
    </div>
}