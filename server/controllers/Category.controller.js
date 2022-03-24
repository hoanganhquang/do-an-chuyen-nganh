const Category = require("../models/Category.model");
const crud = require("./crud");

exports.getAllCategory = async (req, res) => {
  await crud.getAll(Category, res);
};

exports.addCategory = async (req, res) => {
  await crud.insert(Category, req, res);
};

exports.deleteCategory = async (req, res) => {
  await crud.delete(Category, req, res);
};

exports.updateCategory = async (req, res) => {
  await crud.update(Category, req, res);
};
