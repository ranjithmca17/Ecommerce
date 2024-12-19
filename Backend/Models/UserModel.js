
// const mongoose = require('mongoose');
// const { Schema } = mongoose; 
// const bcrypt=require('bcrypt');
// const UserSchema = new Schema({
//   userName: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   role: { type: String, default: 'user' },
//   profileImage: String,
//   bio: { type: String, maxlength: 200 },
//   profession: { type: String },
//   createAt: {
//     type: Date,
//     default: Date.now(),
//   },
// });

// UserSchema.pre('save',async function (next) {
//     const user=this;
//     if(!user.isModified('password')) return next();
//     const haspassword= await bcrypt.hash(user.password,10);
//     user.password=haspassword;
//     next();
// })

// //match passwords
// UserSchema.methods.comparePassword=function(candidatePassword){
// return bcrypt.compare(candidatePassword,this.password);
// }

// // Exporting the model using CommonJS syntax
// module.exports.User = mongoose.model('User', UserSchema);







const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

// Define the User schema
const UserSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user' },
  profileImage: String,
  bio: { type: String, maxlength: 200 },
  profession: { type: String },
  createAt: { type: Date, default: Date.now() },
});

// Hash the password before saving it to the database
UserSchema.pre('save', async function (next) {
  const user = this;
  if (!user.isModified('password')) return next(); // Only hash password if it's modified
  const hashedPassword = await bcrypt.hash(user.password, 10); // Salt rounds = 10
  user.password = hashedPassword;
  next();
});

// Method to compare password during login
UserSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password); // Compare hashed passwords
};

// Export the User model
module.exports.User = mongoose.model('User', UserSchema);
