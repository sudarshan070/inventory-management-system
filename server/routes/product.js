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
    res.status(201).json(product)
  } catch (error) {
    next(error)
  }
})

// get single product
router.get('/:slug', async (req, res, next) => {
  try {
    var product = await Product.findById(req.params.slug)
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
    res.status(201).json({ product })
  } catch (error) {
    next(error)
  }
})

// delete product 
router.delete('/:id', async (req, res, next) => {
  try {
    var deleteProduct = await Product.findByIdAndDelete(req.params.id)
    res.status(201).json({ success: "Delete product" })
  } catch (error) {
    next(error)
  }
})

module.exports = router;
