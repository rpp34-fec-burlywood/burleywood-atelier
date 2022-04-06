const router = require('express').Router();
const relatedProducts = require('./relatedProductsAPI');
const overview = require('./overviewAPI.js');

//when /products/product_id/related is opened,  relatedProducts.getProductById is called.

router.get('/', overview.getProducts);
router.get('/:product', overview.getProductById)
router.get('/:product_id/related', relatedProducts.getProductById);

module.exports = router;
