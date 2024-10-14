const {Router} = require("express")
const courseRouter = Router()

courseRouter.get('/purchases',function(req,res){
    res.json({
        message:"course"
    })
})
courseRouter.get('/preview',function(req,res){
    res.json({
        message:"course"
    })
})

module.exports = { courseRouter }