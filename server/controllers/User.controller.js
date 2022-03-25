const User = require("../models/User.model");
const crud = require("./crud");

exports.updateUser = async (req, res) => {
  await crud.update(User, req, res);
};
