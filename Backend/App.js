// const express=require('express');
// const cors=require('cors');
// const port= process.env.PORT||5000;
// require('dotenv').config();
// const app=express();
// const mongoose=require('mongoose');
// app.use(express.json());
// app.use(cors());
// const cookieParser = require('cookie-parser');
// app.use(cookieParser());


// // MongoDB connection
// const mongoUrl = "mongodb+srv://food:7806872931@cluster0.zrjn50v.mongodb.net/EcommerceProject";
// mongoose
//   .connect(mongoUrl)
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log("MongoDB connection error", err));


//   //define all Routes
//   const authRoutes=require('./Routes/UserRoutes');

//   app.use('/api/auth',authRoutes);

// app.get('/',async(req,res)=>{
//     try{
// res.json({success:true,message:"Backend working successfully"});
//     }catch(error){
// res.json({success:false,message:"server error : ",error});
//     }
// })

// app.listen(port,()=>{
//     console.log(` the port is working on http://localhost:${port}`);
    
// })





const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json()); // For parsing JSON data
app.use(cors()); // Enable CORS for cross-origin requests
app.use(cookieParser()); // Middleware to parse cookies

// MongoDB connection
const mongoUrl = "mongodb+srv://food:7806872931@cluster0.zrjn50v.mongodb.net/EcommerceProject";
mongoose
  .connect(mongoUrl)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error", err));

// Define Routes
const authRoutes = require('./Routes/UserRoutes');
app.use('/api/auth', authRoutes);

// Home Route to check if server is working
app.get('/', async (req, res) => {
  try {
    res.json({ success: true, message: "Backend working successfully" });
  } catch (error) {
    res.json({ success: false, message: "Server error", error });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
