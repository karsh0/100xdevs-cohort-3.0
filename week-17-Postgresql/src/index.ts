import { Client } from 'pg'

const pgClient = new Client('postgresql://neondb_owner:7QKFJm5ShyqE@ep-black-shadow-a5za8vx4.us-east-2.aws.neon.tech/neondb?sslmode=require')

async function main(){
    await pgClient.connect()
    const response = await pgClient.query("SELECT * FROM users")
    console.log(response)
}

main()