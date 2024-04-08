const mongoose = require('mongoose')

const schema = new mongoose.Schema({ 
    _id: { type : String, required: true },
    name: { type : String, required: true }, 
    description: { type : String, required: false, default: '' },
    price: { type : Number, required: true }
    
},{ timestamps: true });

const Products = mongoose.model('Products', schema);

module.exports = Products;