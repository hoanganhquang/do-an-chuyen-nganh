const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  orderDate: Date,
  total: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const Order = mongoose.model("order", OrderSchema);

module.exports = Order;
