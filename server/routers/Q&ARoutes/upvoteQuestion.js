const axios = require('axios');
require('dotenv').config();
const API_KEY = process.env.API_KEY;

const upvoteQuestion = (req, res) => {
  let answer_id = req.params.answer_id;
  
  axios({
    method: 'PUT',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${answer_id}/report`, 
    headers: {'Authorization': API_KEY},
    params: {
      product_id: product_id,
    }
  })
    .then((response) => {
      console.log('-- Get Questions Successful: \n');
      res.send(response.data);
    })
    .catch((err) => {
      console.error('-- Get Questions FAILED: \n', err.response.data);
      res.status(500).send(err);
    });
}

module.exports = {
  upvoteQuestion
}