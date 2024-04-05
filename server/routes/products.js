var express = require('express');


var router = express.Router();
var Products = require('../models/products')


// List Products 
router.get('/', async (req, res, next) => {


    try{
        const productList = await Products.find({}).exec()
        return res.status(200).json(productList)
    }catch(e){
        res.status(500).json()
    }

});

const validateRequestPayload = (reqPayload = {}, validationConfig = []) => {

    const isError = [];
    const vConfigLength =  validationConfig.length;
    for(let i  = 0; i < vConfigLength; i++){
        const key = validationConfig[i]
        const isKeyFound = reqPayload[key];
        if(!isKeyFound){
            isError.push({
                key, 
                error: `${key} is Required`
            })
        }
    }
    return isError;
}

// Create Product
router.post('/', async (req, res, next) => {

    try{
        const { name, price } = req.body;
        const validationConfig = ["name", "price"];
        const isError = validateRequestPayload(req.body, validationConfig)
        if(!isError.length){
            const newProduct = new Products({ name, price })
            await newProduct.save()

            
            return res.status(400).json(isError)
        }

    }catch(err){
        return res.status(500).json()
    }

});

// Product Update by Id 
router.put('/:id', async (req, res, next) => {

    try{
        const id = req.params.id
        const { name, price } = req.body;
        if(name && price && !isNaN(price)){
            const product = await Products.findOne({_id : id }).exec() 
            if(product){
                const updateProduct = await Products.findOneAndUpdate({ _id: id }, { name, price }, { new: true } )
                
                return res.status(200).json(updateProduct)
            }else{
                return res.status(404).json()
            }
        }else{
            return res.status(400).json()
        }
    }catch(err){
        return res.status(500).json()
    }

});


// Delete Product by Id
router.delete('/:id', async (req, res, next) => {

    try{
        const id = req.params.id;

        const product = await Products.findOne({_id : _id }).exec() 
        if(product){
            await Products.deleteOne({ _id : product._id })
            return res.status(200).json()
        }else{
            return res.status(404).json()
        }
    }catch(err){
        return res.status(500).json()
    }
});



module.exports = router;