var express = require('express');
var router = express.Router();
var Products = require('../models/products')
var {validateRequestPayload} = require('../util/validateRequestPayload')


// List Products 
router.get('/', async (req, res, next) => {


    try{
        const productList = await Products.find({}).exec()
        return res.status(200).json(productList)
    }catch(e){
        res.status(500).json()
    }

});

router.get('/:id', async (req, res, next) => {
    
    try{
        const _id = req.params.id;
        const product = await Products.findOne({_id : _id }).exec()        
        if(product){
            return res.status(200).json(product)
        }else{
            return res.status(404).json()
        }
    }catch(err){
        return res.status(500).json()
    }

});

const validationConfigCreateObj = [
    { key: "name", type: "string", isRequired: true },
    { key: "price", type: "number", isRequired: true },
    { key: "desc", type: "string", isRequired: false }
 ];

// Create Product
router.post('/', async (req, res, next) => {

    try{
        const isError = validateRequestPayload(req.body, validationConfigCreateObj)
        if(!isError.length){
            const newProduct = new Products(req.body)
            await newProduct.save()
            
            return res.status(400).json(isError)
        }

    }catch(err){
        return res.status(500).json()
    }

});

// Product Update by Id 

const validationConfigUpdateObj = [
    { key: "name", type: "string", isRequired: false },
    { key: "price", type: "number", isRequired: false },
    { key: "desc", type: "string", isRequired: false }
 ];
router.put('/:id', async (req, res, next) => {
    try{
        const id = req.params.id
        const isError = validateRequestPayload(req.body, validationConfigUpdateObj)
        if(!isError.length){
            const product = await Products.findOne({_id : id }).exec() 
            if(product){
                const updateProduct = await Products.findOneAndUpdate({ _id: id }, req.body, { new: true } )
                return res.status(200).json(updateProduct)
            }else{
                return res.status(404).json()
            }
        }else{
            return res.status(400).json(isError)
        }
    }catch(err){
        return res.status(500).json()
    }

});


// Delete Product by Id
router.delete('/:id', async (req, res, next) => {

    try{
        const id = req.params.id;

        const product = await Products.findOne({_id : id }).exec() 
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