"use client"
import { signIn, useSession } from "next-auth/react";

export default function Home() {
  const session = useSession()
  return (
    <div>
      {JSON.stringify(session)}
      <button onClick={()=> signIn()}>Signin</button>
    </div>
  );
}




