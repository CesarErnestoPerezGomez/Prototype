const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  savedHouses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'HouseModel',
  }],
})




const userModel = mongoose.model("users", userSchema)

module.exports = userModel;