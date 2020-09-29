var mongoose = require('mongoose')
var Schema = mongoose.Schema

var orderSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number
    },
    status: {
        type: String
    }
}, { timestamps: true })

module.exports = mongoose.model("Order", orderSchema)