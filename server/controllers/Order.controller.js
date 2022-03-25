const Order = require("../models/Order.model");
const Product = require("../models/Product.model");
const crud = require("./crud");

exports.getAllOrder = async (req, res) => {
  await crud.getAll(Order, req, res);
};

exports.addOrder = async (req, res) => {
  const products = [...req.body.details];

  const checkQuantity = products.every(async (value, i) => {
    const product = await Product.findById(value.product);
    return product.checkQuantity(value.quantity);
  });

  let err = false;
  if (!checkQuantity) {
    err = true;
  } else {
    products.forEach(async (value, i) => {
      const product = await Product.findById(value.product);
      product.reduceQuantity(value.quantity);
    });
  }

  await crud.insert(Order, req, res, err);
};

exports.deleteOrder = async (req, res) => {
  await crud.delete(Order, req, res);
};

exports.updateOrder = async (req, res) => {
  await crud.update(Order, req, res);
};
