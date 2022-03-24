const OrderDetail = require("../models/OrderDetail.model");
const crud = require("./crud");

exports.getAllOrderDetail = async (req, res) => {
  await crud.getAll(OrderDetail, res);
};

exports.addOrderDetail = async (req, res) => {
  await crud.insert(OrderDetail, req, res);
};

exports.deleteOrderDetail = async (req, res) => {
  await crud.delete(OrderDetail, req, res);
};

exports.updateOrderDetail = async (req, res) => {
  await crud.update(OrderDetail, req, res);
};
