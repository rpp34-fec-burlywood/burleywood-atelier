const axios = require('axios');
require('dotenv').config();
const API_KEY = process.env.API_KEY;

const reportQuestion = (req, res) => {
  let question_id = req.params.question_id;
  
  axios({
    method: 'PUT',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${question_id}/report`, 
    headers: {'Authorization': API_KEY},
  })
    .then((response) => {
      console.log('-- Report Question OK\n', response);
    })
    .catch((err) => {
      console.log('-- Report Question FAILED:', err.response.data);
    });
}

module.exports = {
  reportQuestion
}