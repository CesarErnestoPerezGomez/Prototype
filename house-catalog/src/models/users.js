const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
})





  

const userModel = mongoose.model("users", userSchema)

module.exports = userModel;