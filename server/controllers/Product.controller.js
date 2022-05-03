const Product = require("../models/Product.model");
const crud = require("./crud");

exports.getAllProduct = async (req, res) => {
  await crud.getAll(Product, req, res);
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

exports.getOne = async (req, res) => {
  const query = { province: req.params.province };
  await crud.getByQuery(Product, res, query);
};
