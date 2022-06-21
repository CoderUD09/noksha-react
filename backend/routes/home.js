const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");

router.route("/").get(async (req, res) => {
  try {
    const { limit, category } = req.query;
    const menProduct = await Product.find({category}).limit(limit);
    //const womenProduct = await Product.find({ category: { $eq: "Women" } });
    //const childrenProduct = await Product.find({ category: { $eq: "Kids" } });
    console.log("tt");
    res.json({
      length: menProduct.length,
      data: menProduct,
    });
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
