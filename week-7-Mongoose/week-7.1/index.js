const express = require('express');
const {UserModel, TodoModel} = require('./db');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose')
const JWT_SECRET = "SECRET";

mongoose.connect("mongodb+srv://admin:sdWrBsXuYHdxK3sb@cluster0.plktz.mongodb.net/todo-harkirat222")
const app = express();
app.use(express.json())

app.post('/signup',async function (req,res){
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({
        email:email,
        password:password,
        name:name
    })
    res.json({
        message:"signup success"
    })
})
app.post('/login', async function (req,res){
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email:email,
        password:password
    })
    console.log(user);

    if(user){
        const token = jwt.sign({id: user._id},JWT_SECRET);
        res.json({
            message:"logged in",
            token:token,
        })
    }
    else{
        res.json({
            message:"Invalid credentials"
        })
    }
})
app.post('/todo', function (req,res){

})
app.get('/todos', function (req,res){

})

app.listen(3000);