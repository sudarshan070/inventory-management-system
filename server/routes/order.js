var express = require('express');
var router = express.Router();
var Order = require("../models/order")
var Product = require('../models/product')

router.post('/', async (req, res, next) => {
    try {
        var product = await Product.findById(req.body.product)
        if (product.quantity >= req.body.quantity) {
            req.body.status = "confirmed"
            let order = await Order.create(req.body)
            var updatedProduct = await Product.findByIdAndUpdate(
                product.id,
                { $inc: { quantity: -req.body.quantity } },
                { new: true }
            )
            res.status(201).json({ success: true, order })
        } else {
            res.status(500).json({ success: false, Error: "not enough quantity" })
        }
    } catch (error) {
        next(error)
    }
})

router.get('/', async (req, res, next) => {
    try {
        let orderList = await Order.find({}).populate("product").exec();
        res.status(201).json(orderList)
    } catch (error) {
        next(error);
    }
})

router.put('/', async (req, res, next) => {
    try {
        var order = await Order.findById(req.body.order)
        var product = await Product.findByIdAndUpdate(
            order.product,
            { $inc: { quantity: order.quantity } }
        )
        var updateOrder = await Order.findByIdAndUpdate(
            order.id,
            { status: "cancelled" },
            { new: true }
        )
        res.status(201).json({ success: true, msg: "order cancelled" })
    } catch (error) {
        next(error)
    }
})


router.delete('/:id', async (req, res, next) => {
    try {
        var deleteOrder = await Order.findByIdAndDelete(req.params.id)
        res.status(201).json({ success: "Delete Order" })
    } catch (error) {
        next(error)
    }
})
module.exports = router;