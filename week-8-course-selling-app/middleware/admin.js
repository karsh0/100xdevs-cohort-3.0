const jwt = require("jsonwebtoken");


function adminMiddleware (req,res,next){
    const token = req.headers.token;

    const response = jwt.verify(token,process.env.JWT_SECRET_ADMIN);
    if(response){
        req.adminId = response.id;
        next()
    }
    else{
        res.json({
            message:"Invalid token"
        })
    }
}

module.exports = { adminMiddleware }