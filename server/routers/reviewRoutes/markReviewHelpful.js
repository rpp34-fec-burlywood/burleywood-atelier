const axios = require('axios');
require('dotenv').config();
const API_KEY = process.env.API_KEY;

const markReviewHelpful = (req, res) => {
  var review_id = req.params.review_id;

  axios({
    method: 'PUT',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/${review_id}/helpful`,
    headers: { Authorization: API_KEY }
    })
    .then((response) => {
      console.log('Atelier Mark Review Helpful:', response.data);
      res.status(204);
      res.send(response.data);
    })
    .catch((err) => {
      //console.log('Atelier Mark Review Help Error:', err.response.data);
      res.status(500);
      res.send(err);
    });
}

module.exports = {
  markReviewHelpful
}