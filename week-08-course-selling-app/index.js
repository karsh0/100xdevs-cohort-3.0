require("dotenv").config()
const express = require("express")
const app = express()
const {userRouter} = require('./routes/user')
const {courseRouter} = require('./routes/course')
const {adminRouter} = require('./routes/Admin')

app.use(express.json())

app.use('/user',userRouter)
app.use("/course",courseRouter)
app.use("/admin",adminRouter)

app.post('/signup',function(req,res){

})

app.listen(3000)