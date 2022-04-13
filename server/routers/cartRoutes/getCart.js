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
      console.log('-- Get Cart OK: \n', response.data);
      res.send(response.data);
    })
    .catch((err) => {
      console.error('-- Get Cart FAILED: \n', err.response.data);
      res.status(500).send(err);
    });
}

module.exports = {
  getCart
}