const axios = require('axios');
require('dotenv').config();
const API_KEY = process.env.API_KEY;

const addToCart = (req, res) => {
  var sku_id = req.params.sku_id;
  if (req.params.count < 1) {
    res.status(400);
  }
  axios({
    method: 'POST',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/cart`,
    headers: {'Authorization': API_KEY},
    data: {"sku_id": sku_id}
  })
    .then((response) => {
      console.log('-- Add to Cart OK: \n', response.data);
      res.status(200)
      res.send(response.data);
    })
    .catch((err) => {
      //JSON Bug here even when the call is successful
      console.log('-- Add to Cart FAILED: \n', (err.response?.data ? err.response?.data : err));
      //res.status(500).send(err);
    });
}

module.exports = {
  addToCart
}