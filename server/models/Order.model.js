const mongoose = require("mongoose");
const moment = require("moment");

const OrderSchema = new mongoose.Schema({
  orderDate: {
    type: Date,
    default: moment().format("YYYY-MM-DD"),
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
