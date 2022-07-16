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
  discount: {
    type: Number,
  },
  likes_count: {
    type: Number,
  },
  is_new: {
    type: Boolean,
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
});

const Product = mongoose.model("mens", productSchema);

module.exports = Product;
