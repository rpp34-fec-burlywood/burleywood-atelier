const axios = require('axios');
require('dotenv').config();
const API_KEY = process.env.API_KEY;

const addToCart = (req, res) => {
  var sku_id = req.params.sku_id;
  axios({
    method: 'POST',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/cart`,
    headers: {'Authorization': API_KEY},
    data: {sku_id: sku_id}
  })
    .then((response) => {
      console.log('-- Add to Cart OK: \n', response);
      res.send(response);
    })
    .catch((err) => {
      console.error('-- Add to Cart FAILED: \n', err.response.data);
      res.status(500).send(err);
    });
}

module.exports = {
  addToCart
}