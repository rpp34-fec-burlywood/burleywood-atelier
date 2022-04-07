const router = require('express').Router();
const { getRelatedProductById } = require('./productRoutes/getRelatedProducts');
const { getProductById }= require('./productRoutes/getProductById.js');
const { getAllProducts } = require('./productRoutes/getAllProducts')
const { getProductStyleById } = require('./productRoutes/getProductStyle')
//when /products/product_id/related is opened,  relatedProducts.getProductById is called.

router.get('/', getAllProducts);
router.get('/:product_id', getProductById)
router.get('/:product_id/related', getRelatedProductById);
router.get('/:product_id/styles', getProductStyleById)

module.exports = router;
