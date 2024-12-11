import { PrismaClient } from "@prisma/client";
const client = new PrismaClient()


async function createUser(){

    await client.user.create({
        data:{
            username: "harkirat",
            password: "123123",
            age: 12,
        }
    })
}

createUser()