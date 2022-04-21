const Province = require("../models/Province.model");
const crud = require("./crud");

exports.getAllProvince = async (req, res) => {
  await crud.getAll(Province, req, res);
};
