const axios = require('axios');
require('dotenv').config();
const API_KEY = process.env.API_KEY;

const getReviewById = (req, res) => {
  var product_id = req.query.product_id;
  var page = req.query.page;
  var count = req.query.count;
  var sort = req.query.sort;

  axios({
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews`,
    headers: { Authorization: API_KEY },
    params: {
      product_id: product_id,
      page: page,
      count: count,
      sort: sort
    }
    })
    .then((response) => {
      // console.log('Get Review By Id:', response.data);
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