const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  peice: Number,
  category: String,
});

module.exports = mongoose.model("products", productSchema);
