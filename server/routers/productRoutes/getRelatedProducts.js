const axios = require('axios');
require('dotenv').config();
const API_KEY = process.env.API_KEY;

const getRelatedProductById = (req, res) => {
  var product_id = req.params.product_id;
  console.log(product_id);
  axios({
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${product_id}/related`,
    headers: { Authorization: API_KEY }
    })
    .then((response) => {
      console.log('Got related products Array: \n', response.data);
      res.send(response.data);
    })
    .catch((err) => {
      console.error('Failed to get related products by Id: \n', err.response.data);
      res.status(500).send(err);
    });
}

module.exports = {
  getRelatedProductById
}