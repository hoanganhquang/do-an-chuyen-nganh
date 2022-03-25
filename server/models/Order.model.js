const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  orderDate: {
    type: Date,
    default: new Date(),
  },
  total: Number,
  status: String,
  details: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
      },
      quantity: {
        type: Number,
      },
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const Order = mongoose.model("order", OrderSchema);

module.exports = Order;
