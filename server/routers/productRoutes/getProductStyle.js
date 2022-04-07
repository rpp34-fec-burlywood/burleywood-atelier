const axios = require('axios');
require('dotenv').config();
const API_KEY = process.env.API_KEY;

const getProductStyleById = (req, res) => {
  var product_id = req.params.product_id;
  axios({
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${product_id}/styles`,
    headers: { Authorization: API_KEY }
    })
    .then((response) => {
      console.log('-- Get Product Style by ID OK\n', response.data);
      res.status(200);
      res.send(response.data);
    })
    .catch((err) => {
      console.log('-- Get Product Style by ID FAILED:', err.response.data);
      res.status(500);
      res.send(err);
    });
}

module.exports = {
  getProductStyleById
}