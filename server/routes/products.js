var express = require('express');
const { v4: uuidv4 } = require('uuid');
const { DUMMY_PRODUCT_LIST } = require('../dummy/dummy-products');
var router = express.Router();
// List Products 
router.get('/', function(req, res, next) {

    const products = DUMMY_PRODUCT_LIST
    return res.status(200).json(products)
    try{
        // Start : Should replace by Actual DB Query 
        const products = DUMMY_PRODUCT_LIST
        // End
        return res.status(200).json(products)
    }catch(e){
        res.status(500).json()
    }

});

// Create Product
router.post('/', function(req, res, next) {

    try{
        const { name, price } = req.body;
        if(name && price){
            const newProduct = { name: body.name, price : body.price }
            // Start : Should replace by Actual DB Query
            const finalobj = { _id : uuidv4(), ...newProduct}
            DUMMY_PRODUCT_LIST.push(finalobj)
            const product =  finalobj;
            // End
            // TODO : if product already exsist in db should return 409 
            return res.status(200).json(product)
        }else{
            return res.status(400).json()
        }
    }catch(err){
        return res.status(500).json(err)
    }

});