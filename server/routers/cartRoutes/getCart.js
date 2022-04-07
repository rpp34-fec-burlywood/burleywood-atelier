const axios = require('axios');
require('dotenv').config();
const API_KEY = process.env.API_KEY;

const getCart = (req, res) => {
  axios({
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/cart/`,
    headers: { Authorization: API_KEY },
  })
    .then((response) => {
      console.log('-- Get All Products OK\n', response.data);
      res.status(200);
      res.send(response.data);
    })
    .catch((err) => {
      console.log('-- Get All Products FAILED:', err.response.data);
      res.status(500);
      res.send(err);
    });
}

module.exports = {
  getCart
}