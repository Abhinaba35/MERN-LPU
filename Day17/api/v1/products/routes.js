const express = require('express');
const { createProductController } = require('./controller.js');


const productRouter = express.Router();

productRouter.get('/products', (req, res) => {
    res.json({
        isSuccess: true,
        message: "Products fetched successfully",
        data: {}
    });
});

productRouter.post('/', createProductController);



module.exports = { productRouter };