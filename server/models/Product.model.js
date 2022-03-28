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

ProductSchema.methods.checkQuantity = (product, amount) => {
  if (product.quantityInStock < amount) return false;

  return true;
};

ProductSchema.methods.reduceQuantity = async (product, amount) => {
  product.quantityInStock = product.quantityInStock - amount;
  await product.save();
};

const Product = mongoose.model("product", ProductSchema);

module.exports = Product;
