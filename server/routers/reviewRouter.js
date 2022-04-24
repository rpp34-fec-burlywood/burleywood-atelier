const router = require('express').Router();
const { getReviewById } = require('./reviewRoutes/getReviewById.js');
const { getReviewMeta }= require('./reviewRoutes/getReviewMeta.js');
const { postReview } = require('./reviewRoutes/postReview.js');
const { markReviewHelpful } = require('./reviewRoutes/markReviewHelpful.js');
const { reportReview } = require('./reviewRoutes/reportReview.js');


router.post('/', postReview);
router.get('/:product_id', getReviewById);
router.get('/meta/:product_id', getReviewMeta);
router.put('/:review_id/helpful', markReviewHelpful);
router.put('/:review_id/report', reportReview);

module.exports = router;
