import { PrismaClient } from "@prisma/client";

const PrismaClientSingleton = () =>{
    return new PrismaClient()
}

type PrismaClientSingleton = ReturnType<typeof PrismaClientSingleton>

const globalforPrisma = globalThis as unknown as {
    prisma: PrismaClientSingleton | undefined
}

const prisma = globalforPrisma.prisma ?? PrismaClientSingleton()

export default prisma

if(process.env.NODE_ENV !== "production") globalforPrisma.prisma = prisma