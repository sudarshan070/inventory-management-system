var mongoose = require('mongoose')
var slug = require('slug')
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
    },
    slug: {
        type: String
    }
}, { timestamps: true })

productSchema.pre('save', async function (next) {
    try {
        if (this.name) {
            var productSlug = slug(this.name, { lower: true })
            this.slug = productSlug;
        }
    } catch (error) {
        next(error)
    }
})

module.exports = mongoose.model("Product", productSchema)
