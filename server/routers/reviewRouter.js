const router = require('express').Router();
const { getReviewById } = require('./reviewRoutes/getReviewById.js');
const { getReviewMeta }= require('./reviewRoutes/getReviewMeta.js');
//const { postReview } = require('./reviewRoutes/postReview.js')

router.get('/review/:product_id', getReviewById);
router.get('/review/meta/:product_id', getReviewMeta);
//router.post('/review');

module.exports = router;
