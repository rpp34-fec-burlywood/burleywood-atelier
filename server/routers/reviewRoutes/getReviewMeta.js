const axios = require('axios');
require('dotenv').config();
const API_KEY = process.env.API_KEY;

const getReviewMeta = (req, res) => {
  var product_id = req.query.product_id;

  axios({
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta`,
    headers: { Authorization: API_KEY },
    params: {
      product_id: product_id
    }
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