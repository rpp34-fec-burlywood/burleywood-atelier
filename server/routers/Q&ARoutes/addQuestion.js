const axios = require('axios');
require('dotenv').config();
const API_KEY = process.env.API_KEY;

const addQuestion = (req, res) => {
  let product_id = req.params.product_id;

  // optional parameters?
  let body = req.body.body || '';
  let name = req.body.name || '';
  let email = req.body.email || '';

  axios.post({
    method: 'POST',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions`, 
    headers: {'Authorization': API_KEY},
    params: {
      body,
      name,
      email,
      product_id
    }
  })
    .then((response) => {
      console.log('-- Add Question Successful: \n', response.data);
      res.send(response.data);
    })
    .catch((err) => {
      console.error('-- Add Question FAILED: \n', err.response.data);
      res.status(500).send(err);
    });
}

module.exports = {
  addQuestion
}