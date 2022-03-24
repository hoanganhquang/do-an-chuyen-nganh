const Product = require("../models/Product.model");
const crud = require("./crud");

exports.getAllProduct = async (req, res) => {
  await crud.getAll(Product, res);
};

exports.addProduct = async (req, res) => {
  await crud.insert(Product, req, res);
};

exports.deleteProduct = async (req, res) => {
  await crud.delete(Product, req, res);
};

exports.updateProduct = async (req, res) => {
  await crud.update(Product, req, res);
};
