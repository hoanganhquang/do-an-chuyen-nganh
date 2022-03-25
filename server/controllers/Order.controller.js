const Order = require("../models/Order.model");
const crud = require("./crud");

exports.getAllOrder = async (req, res) => {
  await crud.getAll(Order, req, res);
};

exports.addOrder = async (req, res) => {
  await crud.insert(Order, req, res);
};

exports.deleteOrder = async (req, res) => {
  await crud.delete(Order, req, res);
};

exports.updateOrder = async (req, res) => {
  await crud.update(Order, req, res);
};
