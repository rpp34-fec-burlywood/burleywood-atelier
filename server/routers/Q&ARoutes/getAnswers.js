const axios = require('axios');
require('dotenv').config();
const API_KEY = process.env.API_KEY;

const getAnswers = (req, res) => {
  let question_id = req.params.question_id;

  // page and count are optional params, setting default according to api specs
  let page = req.params.page || 1;
  let count = req.params.count|| 5;

  axios({
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${question_id}/answers`, 
    headers: {'Authorization': API_KEY},
    params: {
      page,
      count
    }
  })
    .then((response) => {
      console.log('-- Get Answers Successful: \n', response.data);
      res.send(response.data);
    })
    .catch((err) => {
      console.error('-- Get Answers FAILED: \n', err.response.data);
      res.status(500).send(err);
    });
}

module.exports = {
  getAnswers
}