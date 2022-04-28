const router = require('express').Router();
const { addQuestion } = require('./Q&ARoutes/addQuestion');
const { getQuestions } = require('./Q&ARoutes/getQuestions');
const { getAnswers } = require('./Q&ARoutes/getAnswers');
const { addAnswer } = require('./Q&ARoutes/addAnswer');
const { reportAnswer } = require('./Q&ARoutes/reportAnswer');
const { reportQuestion } = require('./Q&ARoutes/reportQuestion');
const { upvoteAnswer } = require('./Q&ARoutes/upvoteAnswer');
const { upvoteQuestion } = require('./Q&ARoutes/upvoteQuestion');

router.post('/questions/:product_id/', addQuestion);
router.get('/questions/:product_id/:page?/:count?', getQuestions);
router.put('/questions/report/:question_id', reportQuestion);
router.put('/questions/upvote/:question_id', upvoteQuestion);

router.post('/answers/:question_id/', addAnswer);
router.get('/answers/:question_id/:page?/:count?', getAnswers);
router.put('/answers/report/:answer_id', reportAnswer);
router.put('/answers/upvote/:answer_id', upvoteAnswer);

module.exports = router;
