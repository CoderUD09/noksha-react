const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  category: {
    type: String,
  },
  subcategory: {
    type: String,
  },
  name: {
    type: String,
  },
  current_price: {
    type: Number,
  },
  raw_price: {
    type: Number,
  },
  currency: {
    type: String,
  },
  discount: {
    type: Number,
  },
  likes_count: {
    type: Number,
  },
  is_new: {
    type: Boolean,
  },
  codCountry: {
    type: String,
  },
  variation_0_color: {
    type: String,
  },
  variation_1_color: {
    type: String,
  },
  variation_0_thumbnail: {
    type: String,
  },
  variation_0_image: {
    type: String,
  },
  variation_1_thumbnail: {
    type: String,
  },
  variation_1_image: {
    type: String,
  },
  image_url: {
    type: String,
  },
  url: {
    type: String,
  },
  id: {
    type: String,
  },
  model: {
    type: String,
  },
});

const Product = mongoose.model("men", productSchema);

module.exports = Product;
