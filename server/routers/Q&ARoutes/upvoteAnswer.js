const axios = require('axios');
require('dotenv').config();
const API_KEY = process.env.API_KEY;

const upvoteAnswer = (req, res) => {
  let answer_id = req.params.answer_id;
  
  axios({
    method: 'PUT',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/answers/${answer_id}/helpful`, 
    headers: {'Authorization': API_KEY},
  })
    .then((response) => {
      console.log('-- Mark Answer as Helpful Successful: \n');
      res.send(response.data);
    })
    .catch((err) => {
      console.error('-- Mark Answer as Helpful FAILED: \n', err.response.data);
      res.status(500).send(err);
    });
}

module.exports = {
  upvoteAnswer
}