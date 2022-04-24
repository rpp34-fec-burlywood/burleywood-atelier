const axios = require('axios');
require('dotenv').config();
const API_KEY = process.env.API_KEY;

const addQuestion = (req, res) => {
  let product_id = req.params.product_id;
  product_id = parseInt(product_id);
  // optional parameters?
  let body = req.body.body || '';
  let name = req.body.name || '';
  let email = req.body.email || '';

  console.log(body, name, email)

  axios({
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions`,
    method: 'post',
    headers: {'Authorization': API_KEY},
    data: {
      body,
      name,
      email,
      product_id
    }
  })
    .then((response) => {
      console.log('-- Add Question Successful: \n', response.data);
      res.status(201).send('Questions created successfully')

    })
    .catch((err) => {
      console.error('-- Add Question FAILED: \n', err);
      res.status(500).send(err);
    });
}

module.exports = {
  addQuestion
}