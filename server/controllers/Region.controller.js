const Region = require("../models/Region.model");
const crud = require("./crud");

exports.getAllRegion = async (req, res) => {
  await crud.getAll(Region, req, res);
};
