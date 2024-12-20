const { Router } = require("express");
const { adminModel, courseModel } = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const {adminMiddleware} = require("../middleware/admin")
const adminRouter = Router();

adminRouter.post("/signup", async function (req, res) {
  const {email, password , firstName ,lastName} = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 2);

     await adminModel.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });

    res.json({
        message: "admin signup success",
      });
  } catch (e) {
    res.json({ e });
  }

});


adminRouter.post("/signin", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    try{

      const admin = await adminModel.findOne({
          email,
        });
        
        const passwordMatch = await bcrypt.compare(password, admin.password);
        if(admin&&passwordMatch){
            const token = jwt.sign({id:admin._id.toString()},process.env.JWT_SECRET_ADMIN);
            res.json(
                { message: "admin signin success",token:token }
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
});
    


adminRouter.post("/course", adminMiddleware,async function (req, res) {
  const adminId = req.adminId;
  const {title,description,price,imageUrl} = req.body;
  const course = await courseModel.create({
    title,description,price,imageUrl,creatorId:adminId
  })

  res.json({
    message:"course created successfully",
    courseId: course._id
  })
  req.courseId = course._id;

});

adminRouter.put("/course",adminMiddleware , async function (req, res) {
    const {title,description,price,imageUrl,courseId} = req.body;
    const adminId = req.adminId;

    const course = await courseModel.updateOne({
        _id:courseId, creatorId:adminId
    },{
        title,description,imageUrl,price
    })

    res.json({
        message:"updated course",
        course
    })


    
});
adminRouter.get("/course/all",adminMiddleware , async function (req, res) {
    const adminId = req.adminId;
    const courses = await courseModel.find({
        creatorId:adminId
    })
    res.json({courses})
});

module.exports = { adminRouter };
