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

ProductSchema.methods.checkQuantity = (amount) => {
  if (this.quantityInStock < amount) return false;

  return true;
};

ProductSchema.methods.reduceQuantity = (amount) => {
  this.quantityInStock = this.quantityInStock - amount;
};

const Product = mongoose.model("product", ProductSchema);

module.exports = Product;
