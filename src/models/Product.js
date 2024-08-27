const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    img: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    peso: {
        type: Number,
        required: true
    }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

