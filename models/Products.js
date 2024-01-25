const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  supplier: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: false,
  },
  product_location: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
