const axios = require('axios');
require('dotenv').config();
const API_KEY = process.env.API_KEY;

//Not done
const postReview = (req, res) => {
  console.log('Post REQ', req.query);
  console.log('Post Body', req.body);
  var product_id = req.query.product_id;
  var rating = req.query.rating;
  var summary = req.query.summary;
  var body = req.query.body;
  var recommend = req.query.recommend;
  var name = req.query.name;
  var email = req.query.email;
  var photos = req.query.photos;
  var characteristics = req.query.characteristics;

  axios({
    method: 'POST',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews`,
    headers: {'Authorization': API_KEY},
    data: {
      product_id: 64626,
      rating: 3,
      summary: "summary",
      body: "body",
      recommend: true,
      name: "name",
      email: "email",
      photos: [],
      characteristics: {}
    }
  })
    .then((response) => {
      console.log('Post Review by Id:', response.data);
      res.status(201);
      res.send('Updated.');
    })
    .catch((err) => {
      console.log('Post Review Error:', err);
      res.status(500);
      res.send(err);
    });
}

module.exports = {
  postReview
}