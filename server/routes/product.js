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
        warehouse: product.warehouse
      }
    })
  } catch (error) {
    next(error)
  }
})


module.exports = router;
