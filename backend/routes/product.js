const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");

router.route("/").get(async (req, res) => {
  try {
    const { limit, category } = req.query;
    const menProduct = await Product.find({ category }).limit(limit);
    console.log(category + " fetched");
    res.json({
      length: menProduct.length,
      data: menProduct,
    });
  } catch (error) {
    res.json(error);
  }
});

router.route('/category').get(async (req, res) => {
  try {
    const { category } = req.query;
    const subCategory = await Product.find({ category }).distinct('subcategory');
    console.log(subCategory.length + " fetched");
    res.json({
      data: subCategory,
    });
  } catch (error) {
    res.json(error);
  }
})

router.route('/category/specific').get(async (req, res) => {
  try {
    const { category, subCat } = req.query;
    const product = await Product.find({ category, subcategory: subCat });
    console.log(product.length + " fetched");
    res.json({
      data: product,
    });
  } catch (error) {
    res.json(error);
  }
})

router.route('/category/new').get(async (req, res) => {
  try {
    const { category, pageNo, productPerPage } = req.query;

    const product = await Product
      .find({ category, is_new: true })
      .skip(productPerPage * (pageNo - 1))
      .limit(productPerPage);

    console.log(`No of new product(s): ${product.length} in category: ${category}`);
    res.json({ data: product, });
  } catch (error) {
    res.json(error);
  }
})

router.route('/category/new/count').get(async (req, res) => {
  try {
    const { category } = req.query;
    const product = await Product.find({ category, is_new: true }).count();
    console.log(product);
    res.json({ data: product, });
  } catch (error) {
    res.json(error);
  }
})

module.exports = router;
