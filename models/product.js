const mongoose = require('mongoose')

// const productCategory = ['Baju', 'Celana', 'Aksesoris', 'Jaket'];

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'nami teu kenging kosong']
    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Pangosna saalitna 0 teu kenging minus']
    },
    color: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['Baju', 'Celana', 'Aksesoris', 'Jaket']
    },
    garment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Garment',
    }
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product