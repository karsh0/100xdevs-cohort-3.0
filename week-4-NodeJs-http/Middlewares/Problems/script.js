// 2. Create a middleware that counts total number of requests sent to a server. Also create an endpoint that exposes it

const express = require('express');
const app = express();

let responseCount = 0; 

app.get('/res',function(req,res){
    res.json({
        totalResponses:  responseCount
    })
})

app.use(function(req,res,next){
    responseCount++;
    next()
})

app.get('/',function(req,res){
    res.json({
        request: req.method,
    })
})



app.listen(3000)