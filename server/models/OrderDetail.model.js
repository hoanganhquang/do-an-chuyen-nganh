const mongoose = require("mongoose");

const OrderDetailSchema = new mongoose.Schema({
  quantity: Number,
  amount: Number,
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "order",
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
  },
});

const OrderDetail = mongoose.model("orderDetail", OrderDetailSchema);

module.exports = OrderDetail;
