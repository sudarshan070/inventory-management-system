var express = require('express');
var router = express.Router();
var Order = require("../models/order")
var Product = require('../models/product')

router.post('/', async (req, res, next) => {
    try {
        var product = await Product.findById(req.body.product)
        if(product.quantity > req.body.quantity){
            req.body.status="confirmed"
            let order=await Order.create(req.body)
            var updatedProduct=await Product.findByIdAndUpdate(product.id,{$inc:{quantity:-req.body.quantity}},{new:true})
            res.status(201).json({success:true,order})
        }else{
            console.log("not enough quantity");
            res.status(500).json({success:false,Error:"not enough quantity"})
        }
    } catch (error) {
        next(error)
    }
})

router.get('/',async(req,res,next)=>{
    try {
        let orderList=await Order.find({}).populate("product").exec();
        console.log(orderList,"all list order");
        res.status(201).json({orderList})
    } catch (error) {
        next(error);
    }
})


module.exports = router;