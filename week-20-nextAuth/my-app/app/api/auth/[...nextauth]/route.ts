import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import jwt from "jsonwebtoken"
import { cookies } from "next/headers"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name:"Email",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "karan" },
        email: {label: "Email", type:"email", placeholder:"Enter your email"},
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const username = credentials?.username;
        const password = credentials?.password;
        const email = credentials?.email;

        console.log(username);
        console.log(password)
        const res = await fetch("http://localhost:3000/api/user/login", {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        })
        const user = await res.json()
        const token = (await cookies()).get('Authorization')
        console.log("token: ",token)
        const verifiedUser = jwt.verify(user.token, process.env.NEXTAUTH_SECRET || "123123")
        console.log("veridfied user: ", verifiedUser)
        if (user) {
          return user
        }
        return null
      }
    })
  ],
  secret:process.env.NEXTAUTH_SECRET,
 
  jwt:{
    secret:process.env.NEXTAUTH_SECRET
  },
 
})

export { handler as GET, handler as POST }