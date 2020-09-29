var express = require('express');
var router = express.Router();
var Product = require('../models/product')


// add product
router.post('/add', async (req, res, next) => {
  try {
    var product = await Product.create(req.body.product)
    res.status(201).json({
      product: {
        name: product.name,
        quantity: product.quantity,
        warehouse: product.warehouse,
        slug: product.slug
      }
    })
  } catch (error) {
    next(error)
  }
})

// get product
router.get("/allproduct", async (req, res, next) => {
  try {
    var product = await Product.find({})
    res.status(201).json({ product })
  } catch (error) {
    next(error)
  }
})

// get single product
router.get('/:slug', async (req, res, next) => {
  try {
    var product = await Product.findOne({ slug: req.params.slug })
    res.status(201).json({ product })
  } catch (error) {
    next(error)
  }
})

// update product
router.put('/:slug', async (req, res, next) => {
  try {
    var product = await Product.findOneAndUpdate(
      { slug: req.params.slug },
      req.body.product,
      { new: true })
    res.json({ product })
  } catch (error) {
    next(error)
  }
})



module.exports = router;
