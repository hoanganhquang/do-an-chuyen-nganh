const Order = require("../models/Order.model");
const Product = require("../models/Product.model");
const crud = require("./crud");

const asyncEvery = async (arr, func) => {
  for (let e of arr) {
    if (!(await func(e))) return false;
  }

  return true;
};

exports.getAllOrder = async (req, res) => {
  await crud.getAll(Order, req, res);
};

exports.addOrder = async (req, res) => {
  const products = [...req.body.details];

  const checkQuantity = await asyncEvery(products, async (e) => {
    const product = await Product.findById(e._id);
    return product.quantityInStock >= e.quantity;
  });

  let err = false;
  if (!checkQuantity) {
    err = true;
  } else {
    products.forEach(async (value, i) => {
      const product = await Product.findById(value._id);
      product.reduceQuantity(product, value.quantity);
    });
  }

  req.body.user = req.user._id;

  await crud.insert(Order, req, res, err);
};

exports.deleteOrder = async (req, res) => {
  await crud.delete(Order, req, res);
};

exports.updateOrder = async (req, res) => {
  await crud.update(Order, req, res);
};
