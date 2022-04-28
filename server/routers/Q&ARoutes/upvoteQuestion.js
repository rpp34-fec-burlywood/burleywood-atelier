const axios = require('axios');
require('dotenv').config();
const API_KEY = process.env.API_KEY;

const upvoteQuestion = (req, res) => {
  let question_id = req.params.question_id;
  
  axios({
    method: 'PUT',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${question_id}/helpful`, 
    headers: {'Authorization': API_KEY},
  })
    .then((response) => {
      console.log('-- Mark Question as Helpful Successful: \n');
      res.send(response.data);
    })
    .catch((err) => {
      console.error('-- Mark Question as Helpful FAILED: \n', err.response.data);
      res.status(500).send(err);
    });
}

module.exports = {
  upvoteQuestion
}