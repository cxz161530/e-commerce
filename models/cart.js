const mongoose = require("mongoose");
const itemSchema = mongoose.Schema({
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    quantity: {
      type: Number,
      default: 0,
    },
  });
  

const CartsSchema = mongoose.Schema({
    username: String, 

    userId: {type: mongoose.Schema.Types.ObjectId},
    products: [itemSchema],
});

module.exports = mongoose.model("Cart", CartsSchema);