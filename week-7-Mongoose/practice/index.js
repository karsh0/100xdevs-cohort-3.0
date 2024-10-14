const express = require('express');
const mongoose = require('mongoose');
const {UserModel, TodoModel} = require('./db')
const bcrypt = require("bcrypt");
const app = express();
const jwt = require("jsonwebtoken");
const JWT_SECRET = "idontknow"

mongoose.connect(  );

app.use(express.json());
app.post('/signup', async function(req,res){
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    const hashedPassword = await bcrypt.hash(password,5)
    const response = await UserModel.create({
        email,
        password:hashedPassword,
        name
    })

    if(!response){
        res.json({message: "Error creating user"})
        return
    }

    res.json({
        message:"signup successfull"
    })

})

app.post('/signin', async function(req,res){
    const email = req.body.email;
    const password = req.body.password;

    
    const user = await UserModel.findOne({
        email:email
    })

    console.log(user)
    const hashedPassword = await bcrypt.compare(password,user.password);
    
    if(!hashedPassword){
        res.json({
            message:"User not found"
        })
        return
    }

    const token = jwt.sign({id:user._id.toString()},JWT_SECRET);

    res.json({
        userId:user._id.toString(),
        token:token
    })

})

function auth(req,res,next){
    const token = req.headers.token;

    const response = jwt.verify(token,JWT_SECRET);

    if(!response){
        res.json({message:"authentication failed/invalid token"});
    }
    req.userId = response.id;

    next()

}

app.post('/todo',auth,async function(req,res){
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;
    const description = req.body.description;

    const todo = await TodoModel.create({
        title,
        done,
        description,
        userId
    })

    if(!todo){
        res.json({message:"error in create the todo"})
        return
    }

    res.json({message:"todo created successfully", userId, todo})
})

app.get('/todos',auth,function(req,res){
    const userId = req.userId;

    const todos = mongoose.findOne({
        userId
    })

    res.json({
        todos
    })

})

app.listen(3000)