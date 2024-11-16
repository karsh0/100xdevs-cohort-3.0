import express from "express"
import { userModel } from "./db";
import jwt from "jsonwebtoken"
import { JWT_PASSWORD } from "./config";
import { userMiddleware } from "./middleware";
const app = express();

app.use(express.json())

app.post('/api/v1/signup', async(req,res)=>{
    const {username, password} = req.body;

    try {
        await userModel.create({
            username: username,
            password: password
        }) 

        res.json({
            message: "User signed up"
        })
    } catch(e) {
        res.status(411).json({
            message: "User already exists"
        })
    }
})

app.post('/api/v1/signin', async(req,res)=>{
    const {username, password} = req.body;

    try{
        const user = await userModel.findOne({username});
        if(user && user.password == password){
            const token = jwt.sign({id: user._id}, JWT_PASSWORD);
            res.json({token})
        }
        res.status(403).json("Incorrect credentials");
    }catch(e){
        res.json(e)
    }
})

app.post('/api/v1/content',userMiddleware,  (req,res)=>{
    res.json({message: "content"})
})

app.get('/api/v1/content', (req,res)=>{
    
})

app.post('/api/v1/brain/share', (req,res)=>{
    
})

app.listen(3000)




