const axios = require('axios');
require('dotenv').config();
const API_KEY = process.env.API_KEY;

//Not done
const postReview = (req, res) => {
  var product_id = req.params.product_id;
  var rating = req.params.rating;
  var summary = req.params.summary;
  var body = req.params.body;
  var recommend = req.params.recommend;
  var name = req.params.name;
  var email = req.params.email;
  var photos = req.params.photos;
  var characteristics = req.params.characteristics;

  axios({
    method: 'POST',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews`,
    headers: {'Authorization': API_KEY},
    params: {
      product_id: product_id,
      rating: rating,
      summary: summary,
      body: body,
      recommend: recommend,
      name: name,
      email: email,
      photos: photos,
      characteristics: characteristics
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