const router = require('express').Router();
const { getCart } = require('./cartRoutes/getCart')
const { addToCart } = require('./cartRoutes/addToCart')

router.get('/', getCart);
router.post('/:sku_id', addToCart)

module.exports = router;
