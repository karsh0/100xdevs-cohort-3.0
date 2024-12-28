
"use client"
import { SessionProvider } from "next-auth/react";

export function SessionWrapper({children} : any){
    return <SessionProvider>
        {children}
    </SessionProvider>
}