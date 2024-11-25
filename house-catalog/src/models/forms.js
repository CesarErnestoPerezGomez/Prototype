const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phoneNumber : String,
    House : String
  });
  const ContactModel = mongoose.model('contacts', contactSchema);

  module.exports = ContactModel;  