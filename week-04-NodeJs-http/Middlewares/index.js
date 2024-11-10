const express = require('express');
const app = express();

app.use(function(req,res,next){
    let age = req.query.age;
    if(age >14){
       next();
    }
    else{
        res.json({
            msg:'Sorry you are not eligible for it'
        })
    }
})

app.get('/match1',function(req,res){
    res.json({msg:'Tickets booked!'})
})

app.listen(3000)
// module.exports = app;