const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config")

function userMiddleware (req,res,next){
    const token = req.headers.token;

    const response = jwt.verify(token,JWT_SECRET);
    if(response){
        req.userId = response.id;
        next()
    }
    else{
        res.json({
            message:"Invalid token"
        })
    }
}

module.exports = { userMiddleware }