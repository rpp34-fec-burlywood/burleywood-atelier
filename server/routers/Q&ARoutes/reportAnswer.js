const axios = require('axios');
require('dotenv').config();
const API_KEY = process.env.API_KEY;

const reportAnswer = (req, res) => {
  let answer_id = req.params.answer_id;
  axios({
    method: 'PUT',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/answers/${answer_id}/report`, 
    headers: {'Authorization': API_KEY},
  })
    .then((response) => {
      console.log('-- Report Answer OK\n', response);
    })
    .catch((err) => {
      console.log('-- Report Answer FAILED:', err.response.data);
    });
}

module.exports = {
  reportAnswer
}