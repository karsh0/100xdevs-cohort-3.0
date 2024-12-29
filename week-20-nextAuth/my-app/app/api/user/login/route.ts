import prisma from "@/app/db";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import { cookies } from "next/headers";

export async function POST(req: NextRequest){
    const {username, email, password} = await req.json()

    const user = await prisma.user.findFirst({
        where:{
            email
        }
    })

    if(!user){
        return NextResponse.json({
            message:"user not found",
        })
    }

    const token = jwt.sign({
        user_id: user.id
    }, process.env.NEXTAUTH_SECRET || "123123")
    
    const response = NextResponse.json({
        message: "user signed in!",
        user: user,
        token,
    });
    response.cookies.set("Authorization", token);
    return response;
    

}