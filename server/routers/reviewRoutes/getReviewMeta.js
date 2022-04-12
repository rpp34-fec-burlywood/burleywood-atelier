const axios = require('axios');
require('dotenv').config();
const API_KEY = process.env.API_KEY;

const getReviewMeta = (req, res) => {
  var product_id = req.params.product_id;

  axios({
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta?=${product_id}`,
    headers: { Authorization: API_KEY }
    })
    .then((response) => {
      console.log('Get Review Meta:', response.data);
      res.status(200);
      res.send(response.data);
    })
    .catch((err) => {
      console.log('Get Review Meta Error:', err.response.data);
      res.status(500);
      res.send(err);
    });
}

module.exports = {
  getReviewMeta
}