import prisma from "@/app/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    const {username, email, password} = await req.json()

    await prisma.user.create({
       data:{
            username,
            email,
            password
       }
    })

    return NextResponse.json({
        message:"user created"
    })

}