const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'random'

app.get('/',function(req,res){
    res.json({
        message:'setup done'
    })
})

app.use(express.json())

let users = [];

app.post('/signup',function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find((u)=>{
        if(u.username == username){
            return true;
        }
        else{
            return false;
        }
    })
    if(!user){

        users.push({
            username:username,
            password:password
        })
        
        res.json({
            message:'user signed up'
        })
    }
    else{
        res.status(401).json({
            message:'User already exists'
        })
    }
})

app.post('/signin',function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find((u)=>{
        if(u.username == username && u.password == password){
            return u;
        }
        else{
            return false;
        }
    })

    if(user){
        const token = jwt.sign({username:username},JWT_SECRET);
        user.token = token;
        res.header('token',token)
        res.json({
            token:token
        })
    }
    else{
        res.status(401).json({
            message:'Invalid username/password'
        })
    }
})

function auth(req,res,next){
    const token = req.headers.token;
    if(token){   
        jwt.verify(token,JWT_SECRET,(err,decoded)=>{
            if(err){
                res.json({
                    message:'Unauthorization'
                })
            }
            else{
                req.user = decoded;
                next();
            }
        });
    }
}

app.get('/me',auth,function(req,res){
    const user = req.user;

    res.json({
        username:user.username
    })

})


app.listen(3000)