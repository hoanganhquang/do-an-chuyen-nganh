const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "",
  },
  password: String,
  address: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    unique: true,
  },
  phone: {
    type: String,
    default: " ",
  },
  role: {
    type: String,
    default: "User",
  },
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, saltRounds);

  next();
});

UserSchema.methods.checkPassword = function (passwordCheck, currentPassword) {
  return bcrypt.compare(passwordCheck, currentPassword);
};

const User = mongoose.model("user", UserSchema);

module.exports = User;
