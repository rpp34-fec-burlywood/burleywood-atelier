const axios = require('axios');
require('dotenv').config();
const API_KEY = process.env.API_KEY;

const getAllProducts = (req, res) => {
  axios({
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/`,
    headers: { Authorization: API_KEY },
    params: req.query
  })
    .then((response) => {
      //console.log('-- Get All Products OK: \n', response.data);
      res.send(response.data);
    })
    .catch((err) => {
      //console.error('-- Get All Products FAILED: \n', err.response.data);
      res.status(500).send(err);
    });
}

module.exports = {
  getAllProducts
}