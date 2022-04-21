const mongoose = require("mongoose");

const ProvinceSchema = new mongoose.Schema({
  name: String,
});

const Province = mongoose.model("province", ProvinceSchema);

module.exports = Province;
