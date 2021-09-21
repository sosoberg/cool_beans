const mongoose = require("mongoose")
const cartSchema = new mongoose.Schema({
    title:{
        type: String,
        allowNull: false
    },
    size:{
        type: String,
        allowNull: false,
        
    },
    price:{
        type: String,
    },
    extra:{
        type: [String],
        
    },
    dairy:{
        type: String
        
    }




})
module.exports = cartSchema