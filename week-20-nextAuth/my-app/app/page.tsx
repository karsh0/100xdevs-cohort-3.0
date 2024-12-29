"use client"
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const session = useSession()
  return (
    <div>
      {JSON.stringify(session)}
      {session.status == "unauthenticated" && <button className="px-3 py-2 m-2 rounded-xl bg-red-400" onClick={()=> signIn()}>Signin</button>}
      {session.status == "authenticated" && <button className="px-3 py-2 m-2 rounded-xl bg-red-400" onClick={()=> signOut()}>Logout</button>}
    </div>
  );
}




