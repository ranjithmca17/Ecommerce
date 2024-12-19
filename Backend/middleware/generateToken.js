// const jwt=require('jsonwebtoken');
// const User=require("../Models/UserModel");
// // const router = require('../Routes/UserRoutes');

// const JWT_SECRET=process.env.JWT_SECRET;
// console.log("JWT_SECRET : ",JWT_SECRET);

// const generateToken=async (userId)=>{
//     try{
// const user=await User.findById(userId);
// if(!user){
//     throw new Error("User not found");
// }
// const token=jwt.sign({userId:user._id,role:user.role},JWT_SECRET,{expiresIn:'1h'});
// return token;
//     }catch(error){

//     }
// }

// module.exports=generateToken;



const jwt = require('jsonwebtoken');
const { User } = require('../Models/UserModel');

const JWT_SECRET = process.env.JWT_SECRET;
// console.log("JWT_SECRET: ", JWT_SECRET); // Make sure the JWT secret is being loaded correctly

const generateToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }

    // Create JWT token with userId and role
    const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
    // console.log("Generated Token:", token); // Log the token for debugging
    return token;
  } catch (error) {
    console.error("Error generating token:", error); // Log any errors
    throw new Error("Error generating token");
  }
};

module.exports = generateToken;
