import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { PassThrough } from "stream";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
          name: 'Credentials',
          credentials: {
            username: { label: "Username", type: "text", placeholder: "jsmith" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
            const username = credentials?.username;
            const password = credentials?.password;
            console.log(username)
            console.log(password)
            

            const user = {
                username:"harkirat",
                id:"1",
                password:"123123"
            }
            // If no error and we have user data, return it
            if (user) {
              return user
            }
            // Return null if user data could not be retrieved
            return null
          }
        }),

        GoogleProvider({
            clientId: "sdadsd",
            clientSecret: "sdasd"
          })

          ,
          GitHubProvider({
            clientId: "qqqe",
            clientSecret: "1231"
          })
      ]

})

export { handler as GET, handler as POST }