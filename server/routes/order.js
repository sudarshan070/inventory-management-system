var express = require('express');
var router = express.Router();
var Order = require("../models/order")
var Product = require('../models/product')

router.post('/', async (req, res, next) => {
    try {
        console.log(req.body);
        var product = await Product.findById(req.body.product)
        console.log(product,"hawa");
        if(product.quantity > req.body.quantity){
            req.body.status="confirmed"
            let order=await Order.create(req.body)
            console.log(order,"order placed");
            var updatedProduct=await Product.findByIdAndUpdate(product.id,{$inc:{quantity:-req.body.quantity}},{new:true})
            console.log(updatedProduct,"update product");
            res.status(201).json({success:true,order})
        }else{
            console.log("not enough quantity");
            res.status(500).json({success:false,Error:"not enough quantity"})
        }
    } catch (error) {
        next(error)
    }
})

module.exports = router;