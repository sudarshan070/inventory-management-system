var mongoose = require('mongoose')
var Schema = mongoose.Schema

var productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number
    },
    warehouse: {
        type: String
    }
}, { timestamps: true })

module.exports = mongoose.model("Product", productSchema)
