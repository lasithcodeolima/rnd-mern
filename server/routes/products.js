var express = require('express');
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