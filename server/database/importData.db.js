require("dotenv").config();
const connectDb = require("./config.db");
const fs = require("fs");

// const Product = require("../models/Product.model");
// const Province = require("../models/Province.model");
const Region = require("../models/Region.model");

connectDb();

const data = JSON.parse(
  fs.readFileSync(`${__dirname}/province.data.json`, "utf-8")
);

const importData = async () => {
  try {
    await Region.create(data);
    console.log("Success");
  } catch (error) {
    console.log(error);
  }

  process.exit();
};

importData();
