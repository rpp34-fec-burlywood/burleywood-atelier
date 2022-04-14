const axios = require('axios');
require('dotenv').config();
const API_KEY = process.env.API_KEY;

const reportAnswer = (req, res) => {
  let question_id = req.params.question_id;
  
  axios({
    method: 'POST',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${question_id}/answers`, 
    headers: {'Authorization': API_KEY},
    params: {
      sku_id: sku_id
    
    }
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