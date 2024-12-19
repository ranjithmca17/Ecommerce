// const jwt=require('jsonwebtoken');
// const User=require('../Models/UserModel');

// const JWT_SECRET=process.env.JWT_SECRET;

// const verifyToken=(req,res)=>{
//     try{
// const token=req.cookies.token;

// if(!token){
//     return res.json({success:false,message:"invalid token"});
// }
// const decoded=jwt.verify(token,JWT_SECRET);
// if(!decoded){
//     return res.json({success:false,message:"invalid token or not valid"});
// }
// req.userId=decoded.userId;
// req.role=decoded.role;
// next();
//     }catch(error){
// res.json({success:false,message:"token server error : ",error});
//     }
// }



const jwt = require('jsonwebtoken');
// const { User } = require('../Models/UserModel');

const JWT_SECRET = process.env.JWT_SECRET;

const verifyToken = (req, res, next) => {
  try {
    // Get the token from cookies
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ success: false, message: "No token, authorization denied" });
    }

    // Verify the token using the secret key
    const decoded = jwt.verify(token, JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ success: false, message: "Invalid token or token expired" });
    }

    // Attach user data to the request object
    req.userId = decoded.userId;
    req.role = decoded.role;

    next(); // Call the next middleware or route handler
  } catch (error) {
    console.error("Error verifying token:", error); // Log any errors
    return res.status(500).json({ success: false, message: "Token verification failed", error });
  }
};

module.exports = verifyToken;
