const jwt = require("jsonwebtoken");
const User = require("../models/User.model");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.jwt_key);
};

const createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id);

  res.status(statusCode).json({
    status: "success",
    token,
  });
};

exports.signUp = async (req, res) => {
  try {
    const newUser = await User.create({
      email: req.body.email,
      password: req.body.password,
    });

    createSendToken(newUser, 200, req, res);
  } catch (error) {
    console.log(error);
  }
};

exports.signIn = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });

    if (user === null) throw "Tài khoản không hợp lệ";

    const checkPass = await user.checkPassword(
      req.body.password,
      user.password
    );

    if (!checkPass) throw "Tài khoản không hợp lệ";

    createSendToken(user, 200, req, res);
  } catch (error) {
    res.json({
      status: "failure",
      message: error,
    });
  }
};
