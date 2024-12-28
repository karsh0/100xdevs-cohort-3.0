import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"

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

        console.log(username);
        console.log(password)
        const res = await fetch("/your/endpoint", {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        })
        const user = {
          username:"karan",
          id:"12313",
          password:"123131",
          email:"karna@gmail.com"
        }
  
        if (user) {
          return user
        }
        return null
      }
    })
  ]
})

export { handler as GET, handler as POST }