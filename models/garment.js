const mongoose = require("mongoose")

const Product = require('./product')

const garmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Nama Tidak Boleh Kosong'],
    },
    location: {
        type: String,
    },
    contact: {
        type: String,
        required: [true, 'Kontak Tidak Boleh Kosong'],
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Product',
    }]
})

const Garment = mongoose.model( 'Garment', garmentSchema)

module.exports = Garment