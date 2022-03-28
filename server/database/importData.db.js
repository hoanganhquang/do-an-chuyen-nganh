require("dotenv").config();
const connectDb = require("./config.db");
const fs = require("fs");

const Category = require("../models/Category.model");
const Product = require("../models/Product.model");

connectDb();

const product = JSON.parse(
  fs.readFileSync(`${__dirname}/product.data.json`, "utf-8")
);

const importData = async () => {
  try {
    await Product.create(product);
    console.log("Success");
  } catch (error) {
    console.log(error);
  }

  process.exit();
};

importData();
