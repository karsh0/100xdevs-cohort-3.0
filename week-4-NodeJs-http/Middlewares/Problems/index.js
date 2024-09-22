//# Assignments on middleware

// Try these out yourself.

// 1. Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console

const express = require('express');
const app = express();

app.use(function(req,res,next){
    const url = req.url;
    const method = req.method;
    const timestamp = Date.now();
    console.log('url: '+ url)
    console.log('method: '+ method)
    console.log('timestamp: '+ timestamp)
    res.json({
        url:url,
        method: method,
        timestamp:timestamp
    })
    next();
})

app.get('/',function(req,res){
    res.send('GET REQUEST')
})

app.listen(3000);