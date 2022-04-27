const router = require('express').Router();
const { addQuestion } = require('./Q&ARoutes/addQuestion');
const { getQuestions } = require('./Q&ARoutes/getQuestions');
const { getAnswers } = require('./Q&ARoutes/getAnswers');
const { addAnswer } = require('./Q&ARoutes/addAnswer');

router.post('/questions/:product_id/', addQuestion);
router.get('/questions/:product_id/:page?/:count?', getQuestions);
router.post('/answers/:question_id/', addAnswer);
router.get('/answers/:question_id/:page?/:count?', getAnswers);

module.exports = router;
