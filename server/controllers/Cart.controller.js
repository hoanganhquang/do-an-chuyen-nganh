const Card = require("../models/Card.model");
const crud = require("./crud");

exports.getAllCard = async (req, res) => {
  await crud.getAll(Card, res);
};

exports.addCard = async (req, res) => {
  await crud.insert(Card, req, res);
};

exports.deleteCard = async (req, res) => {
  await crud.delete(Card, req, res);
};

exports.updateCard = async (req, res) => {
  await crud.update(Card, req, res);
};
