const axios = require('axios');
require('dotenv').config();
const API_KEY = process.env.API_KEY;

const getReviewById = (req, res) => {
  var product_id = req.params.product_id;
  var page = req.params.page;
  var count = req.params.count;
  var sort = req.params.sort;

  axios({
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?=${product_id}`,
    headers: { Authorization: API_KEY }
    })
    .then((response) => {
      console.log('Get Review By Id:', response.data);
      res.status(200);
      res.send(response.data);
    })
    .catch((err) => {
      console.log('Get Review by Id Error:', err.response.data);
      res.status(500);
      res.send(err);
    });
}

module.exports = {
  getReviewById
}