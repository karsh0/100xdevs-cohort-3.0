import { Client } from 'pg'
import express from 'express'

const pgClient = new Client('postgresql://neondb_owner:7QKFJm5ShyqE@ep-black-shadow-a5za8vx4.us-east-2.aws.neon.tech/neondb?sslmode=require')
const app = express()
app.use(express.json())
pgClient.connect()

app.post('/signup', async(req,res)=>{
    const {username, password, email} = req.body;

    try{
        const response = await pgClient.query(`INSERT INTO users (username, password, email) VALUES ($1,$2,$3)`,[username,email,password])

        console.log(response)
        res.json({
            message:"user signed up"
        })
    }catch(e){
        res.json({
            message:"unable to query"
        })
        console.log(e)
    }
})
app.listen(3000)




// async function main(){
//     await pgClient.connect()
//     const response = await pgClient.query(`UPDATE FROM user(username, password, email) VALUES ('${username}', '${password}', '${email}')`)
//     console.log(response)
// }

// main()