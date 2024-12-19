const express = require('express');
const { User } = require('../Models/UserModel');
const generateToken = require('../middleware/generateToken');
const verifyToken = require("../middleware/verifyToken");
const router = express.Router();



// Register Route
router.post('/register', async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    // Check if all fields are provided
    if (!userName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields: userName, email, and password",
      });
    }

    // Check if the user already exists by checking the email
    const findEmail = await User.findOne({ email });
    if (findEmail) {
      return res.status(400).json({
        success: false,
        message: "User already exists with this email.",
      });
    }

    // Create a new user
    const user = new User({ userName, email, password });
    await user.save();
console.log("verifyToken : ",verifyToken);

    // Respond with success message and created user data (excluding password)
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: {
        userName: user.userName,
        email: user.email,
        role: user.role,
        profileImage: user.profileImage,
        bio: user.bio,
        profession: user.profession,
      },
    });
  } catch (error) {
    console.error("Error in registration:", error);
    res.status(500).json({
      success: false,
      message: "Server error during registration",
      error: error.message,
    });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate email and password fields
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide both email and password.",
      });
    }

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    // Compare the entered password with the hashed password in the database
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Incorrect password.",
      });
    }

    // Generate a token for the user
    const token = await generateToken(user._id);
    if (!token) {
      return res.status(500).json({
        success: false,
        message: "Failed to generate token.",
      });
    }

    // Set the token as a cookie for authentication
    res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });

    // Respond with success message and token
    res.status(200).json({
      success: true,
      message: "Login successful",
      token, // Optionally send the token in the response body
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      message: "Server error during login",
      error: error.message || error,
    });
  }
});

router.post("/logout",async (req,res)=>{
    try{
res.clearCookie('token');
res.json({success:true,message:"logged out successfully......."});
    }catch(error){
        res.json({success:false,message:"logged out server error : ",error});
    }
})

//delete a user
router.delete("/users/:id",async (req,res)=>{
  try{
const {id}=req.params;
const user=await User.findByIdAndDelete(id);
if(!user){
  return res.json({success:false,message:"user not found"});
}
res.json({success:true,message:"user deleted successfylly"});
  }catch{
res.json({success:false,message:"server error : ",error});
  }
})

//get all users
router.get("/getAlluser",async(req,res)=>{
  try{
    const user=await User.find({});
    if(!user){
    return res.json({success:false,message:"Users not found"});
    }
    res.json({success:true,message:user});
  }catch(error){
res.json({
  success:false,message:"server error :",error
})
  }
})

//users edit
router.put("/users/:id",async(req,res)=>{
  try{
const {id}=req.params;
const {role}=req.body;
const user=await User.findByIdAndUpdate(id,{role});
if(!user){
  return res.json({success:false,message:"user not found"});
}
res.json({success:true,message:"user updated succesfully"});
  }catch(error){
res.json({success:false,message:"server error : ",error});
  }
})


router.patch("/edit-profile", async (req, res) => {
  try {
    const { userId, userName, profileImage, bio, profession } = req.body;

    // Check if all required fields are provided
    if (!userId || !userName || !profileImage || !bio || !profession) {
      return res.status(400).json({ 
        success: false, 
        message: "Missing required values: userId, userName, profileImage, bio, and profession." 
      });
    }

    // Find the user by userId
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: "User not found." 
      });
    }

    // Update the user's profile information
    user.userName = userName;
    user.profileImage = profileImage;
    user.bio = bio;
    user.profession = profession;

    // Save the updated user profile
    await user.save();

    // Respond with the updated user data (excluding password)
    res.json({
      success: true,
      message: "Profile updated successfully.",
      data: {
        userName: user.userName,
        email: user.email,
        role: user.role,
        profileImage: user.profileImage,
        bio: user.bio,
        profession: user.profession,
      },
    });
  } catch (error) {
    console.error("Profile update error:", error);
    res.status(500).json({
      success: false,
      message: "Server error during profile update.",
      error: error.message,
    });
  }
});


module.exports = router;
