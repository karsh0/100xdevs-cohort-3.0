const express = require('express');
const app = express()

app.get('/',function(req,res){
    res.send('Working')
})
app.post('/post',function(req,res){
    res.send('nothing much special')
})
app.get('/create',function(req,res){
    res.send('This is create page')
})

app.listen(3000)