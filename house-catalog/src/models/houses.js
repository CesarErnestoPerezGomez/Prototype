const mongoose = require("mongoose");

const HouseSchema = new mongoose.Schema({
    city: String,
    zipCode: String,
    price: Number,
    description: String,
    imageUrl: String,
    bedrooms: Number,
    bathrooms: Number,
    squareFeet: Number
  });
  const HouseModel = mongoose.model('House', HouseSchema);

  module.exports = HouseModel;  