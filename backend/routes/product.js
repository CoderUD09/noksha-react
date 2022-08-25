const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");

router.route("/").get(async (req, res) => {
  try {
    const { limit, category } = req.query;
    const menProduct = await Product.find({ category }).limit(limit);
    // console.log(category + " fetched");
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
    // console.log(subCategory.length + " fetched");
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
    // console.log(product.length + " fetched");
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

    // console.log(`No of new product(s): ${product.length} in category: ${category}`);
    res.json({ data: product, });
  } catch (error) {
    res.json(error);
  }
})

router.route('/category/new/count').get(async (req, res) => {
  try {
    const { category } = req.query;
    const product = await Product.find({ category, is_new: true }).count();
    // console.log(product);
    res.json({ data: product, });
  } catch (error) {
    res.json(error);
  }
})

router.route('/category/mostliked').get(async (req, res) => {
  try {
    const { category, pageNo, productPerPage } = req.query;

    const product = await Product
      .find({ category, likes_count: { $gt: 500 } })
      .sort({ likes_count: -1 })
      .skip(productPerPage * (pageNo - 1))
      .limit(productPerPage);

    // console.log(`No of new product(s): ${product.length} in category: ${category}`);
    res.json({ data: product, });
  } catch (error) {
    res.json(error);
  }
})

router.route('/category/mostliked/count').get(async (req, res) => {
  try {
    const { category } = req.query;
    const product = await Product.find({ category, likes_count: { $gt: 500 } }).count();
    // console.log(product);
    res.json({ data: product, });
  } catch (error) {
    res.json(error);
  }
})

router.route('/category/subcategory').get(async (req, res) => {
  try {
    const { category, pageNo, productPerPage, subcategory } = req.query;

    const product = await Product
      .find({ category, subcategory })
      .skip(productPerPage * (pageNo - 1))
      .limit(productPerPage);

    // console.log(`No of new product(s): ${product.length} in category: ${category}`);
    res.json({ data: product, });
  } catch (error) {
    res.json(error);
  }
})

router.route('/category/subcategory/count').get(async (req, res) => {
  try {
    const { category, subcategory } = req.query;
    const product = await Product.find({ category, subcategory }).count();
    // console.log(product);
    res.json({ data: product });
  } catch (error) {
    res.json(error);
  }
})

router.route('/product/one').get(async (req, res) => {
  try {
    const { pid } = req.query;
    const product = await Product.findById(pid);
    // console.log(product);
    res.json({ data: product });
  } catch (error) {
    res.json(error);
  }
})

router.route('/search').get(async (req, res) => {
  try {
    const { input, pageNo, productPerPage } = req.query;
    const regex = new RegExp(input, 'i');
    const product = await Product
      .find({ subcategory: { $regex: regex } })
      .skip(productPerPage * (pageNo - 1))
      .limit(productPerPage);
    res.json({ data: product });
  } catch (error) {
    res.json(error);
  }
})

router.route('/search/count').get(async (req, res) => {
  try {
    const { input } = req.query;
    const regex = new RegExp(input, 'i');
    const product = await Product.find({ subcategory: { $regex: regex } }).count();
    // console.log(product);
    res.json({ data: product });
  } catch (error) {
    res.json(error);
  }
})

router.route('/addproduct').post(async (req, res) => {
  try {
    // console.log(req.body);
    const newProduct = await Product.create(req.body);
    const product = JSON.parse(JSON.stringify(newProduct));
    // console.log(product._id);
    res.json(product._id);
  } catch (error) {
    console.log(error.message);
  }
})

module.exports = router;
