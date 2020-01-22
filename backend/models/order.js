const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  orderData: [
    {
      name: String,
      price: Number,
      options: [String],
      optionsPrice: Number,
      numOrder: Number,
      totalPrice: Number
    }
  ]
});

module.exports = mongoose.model("Order", orderSchema);
