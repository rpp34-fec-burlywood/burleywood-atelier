const axios = require('axios');
require('dotenv').config();
const API_KEY = process.env.API_KEY;

const getProductById = (req, res) => {
  var product_id = req.params.product_id;
  axios({
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${product_id}`,
    headers: { Authorization: API_KEY }
    })
    .then((response) => {
      //console.log('-- Get Product by ID OK: \n', response.data);
      res.send(response.data);
    })
    .catch((err) => {
      console.error('-- Get Product by ID FAILED: \n', err.response.data);
      res.status(500).send(err);
    });
}

module.exports = {
  getProductById
}