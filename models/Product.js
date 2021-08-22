const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },

    title: {
        type: String,
        allowNull: false,
    },

    ingredients: {
        type: String,
        allowNull: false,
    },

    allergens: {
        type: String,
        allowNull: false,
    },
    
    size: {
        type: String
    }
});

const Product = mongoose.model('Product', productSchema)

module.exports = Product