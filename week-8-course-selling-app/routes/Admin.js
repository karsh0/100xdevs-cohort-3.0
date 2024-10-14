const {Router} = require('express')
const adminRouter = Router()

adminRouter.post('/signup',function(req,res){
    res.json({message:"admin"})
})
adminRouter.post('/signin',function(req,res){
    res.json({message:"admin"})
})
adminRouter.post('/course',function(req,res){
    res.json({message:"admin"})
})
adminRouter.put('/course',function(req,res){
    res.json({message:"admin"})
})
adminRouter.get('/course/all',function(req,res){
    res.json({message:"admin"})
})

module.exports = {adminRouter}