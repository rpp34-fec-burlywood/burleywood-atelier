const router = require('express').Router();
const { getCart } = require('./cartRoutes/getCart')
// const { addToCart } = require('./cartRoutes/addToCart')
//when /products/product_id/related is opened,  relatedProducts.getProductById is called.

router.get('/', getCart);

// currently not working
// router.post('/:product_id', addToCart)

module.exports = router;
