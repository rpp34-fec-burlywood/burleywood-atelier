const axios = require('axios');
require('dotenv').config();
const API_KEY = process.env.API_KEY;

const addToCart = (req, res) => {
  let sku_id = req.params.sku_id;
  axios({
    method: 'POST',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/cart`, 
    headers: {'Authorization': API_KEY},
    params: {sku_id: sku_id}
  })
    .then((response) => {
      console.log('-- Get All Products OK\n', response);
    })
    .catch((err) => {
      console.log('-- Get All Products FAILED:', err.response.data);
    });
}

module.exports = {
  addToCart
}