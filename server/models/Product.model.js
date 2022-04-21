const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  quantityInStock: Number,
  image: String,
  province: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "province",
  },
});

ProductSchema.methods.reduceQuantity = async (product, amount) => {
  product.quantityInStock = product.quantityInStock - amount;
  await product.save();
};

const Product = mongoose.model("product", ProductSchema);

module.exports = Product;
