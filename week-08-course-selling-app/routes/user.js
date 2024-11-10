const {Router} = require('express');
const { userModel, purchaseModel, courseModel } = require('../db');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../config");
const { userMiddleware } = require('../middleware/user');
const userRouter = Router()

userRouter.post('/signup',async function(req,res){
    const {email, password , firstName ,lastName} = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 2);
    
         await userModel.create({
          email,
          password: hashedPassword,
          firstName,
          lastName,
        });
    
        res.json({
            message: "user signup success",
          });
      } catch (e) {
        res.json({ e });
      }
})

userRouter.post('/signin',async function(req,res){
    const email = req.body.email;
    const password = req.body.password;
    try{

      const admin = await userModel.findOne({
          email,
        });
        
        const passwordMatch = await bcrypt.compare(password, admin.password);
        if(admin&&passwordMatch){
            const token = jwt.sign({id:admin._id.toString()},process.env.JWT_SECRET);
            res.json(
                { message: "user signin success",token:token }
            );
        }
        else{
            res.json({
                message:"Incorrect credentials"
            })
        }
    }
    catch(err){
        res.json({err})
    }
})

userRouter.get('/purchases',userMiddleware ,async function(req,res){
    const userId = req.userId;

    const purchases = await purchaseModel.find({
        userId
    })

    const courseData = await courseModel.find({
        _id: {$in: purchases.map(x => x.courseId)}
    })

    res.json({
        purchases,courseData
    })


})

module.exports = { userRouter }