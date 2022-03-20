const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  password: String,
  address: String,
  email: String,
  phone: String,
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
