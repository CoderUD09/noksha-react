const mongoose = require("mongoose");

const peopleSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  streetAddress: String,
  city: String,
  district: String,
  devision: String,
  isAdmin: Boolean,
});

const User = mongoose.model("user", peopleSchema);

module.exports = User;
