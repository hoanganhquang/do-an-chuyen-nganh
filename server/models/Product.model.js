const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: String,
  quantityInStock: Number,
  phone: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  },
});

const Product = mongoose.model("product", ProductSchema);

module.exports = Product;
