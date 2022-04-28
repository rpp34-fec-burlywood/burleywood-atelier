const axios = require('axios');
require('dotenv').config();
const API_KEY = process.env.API_KEY;

const getQuestions = (req, res) => {
  let product_id = req.params.product_id;

  // page and count are optional params, setting default according to api specs
  let page = req.params.page || 1;
  let count = req.params.count || 500;

  axios({
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/`, 
    headers: {'Authorization': API_KEY},
    params: {
      product_id,
      page,
      count
    }
  })
    .then((response) => {
      console.log('-- Get Questions Successful: \n', response.data);
      res.send(response.data);
    })
    .catch((err) => {
      console.error('-- Get Questions FAILED: \n', err.response.data);
      res.status(500).send(err);
    });
}

module.exports = {
  getQuestions
}