const jwt = require("jsonwebtoken");
const User = require("../models/User.model");
const Card = require("../models/Card.model");

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

    await Card.create({
      user: newUser._id,
      products: [],
    });

    createSendToken(newUser, 200, req, res);
  } catch (error) {
    console.log(error);
    res.json({
      status: "Failure",
      message: "Không thành công",
    });
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

exports.protect = async (req, res, next) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    const tokenDecoded = jwt.verify(token, process.env.jwt_key);

    const currentUser = await User.findById(tokenDecoded.id).select(
      "-password"
    );

    req.user = currentUser;

    next();
  } catch (error) {
    console.log(error);
    let message;

    if (error.name === "CastError") {
      message = "Không được cấp quyền";
    }

    res.json({
      status: "failure",
      message,
    });
  }
};

exports.restrict = async (req, res, next) => {
  try {
    if (req.user.role.toLowerCase() === "user") throw "Không được cấp quyền";

    next();
  } catch (error) {
    res.json({
      status: "failure",
      message: error,
    });
  }
};
