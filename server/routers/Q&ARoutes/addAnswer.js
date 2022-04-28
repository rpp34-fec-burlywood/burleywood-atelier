const axios = require('axios');
require('dotenv').config();
const API_KEY = process.env.API_KEY;

const addAnswer = (req, res) => {
  let question_id = req.params.question_id;
  question_id = parseInt(question_id);
  // optional parameters?
  let body = req.body.body || '';
  let name = req.body.name || '';
  let email = req.body.email || '';
  let photos = req.body.photos || [];

  console.log(body, name, email)

  axios({
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${question_id}/answers`,
    method: 'post',
    headers: {'Authorization': API_KEY},
    data: {
      body,
      name,
      email,
      photos
    }
  })
    .then((response) => {
      console.log('-- Add Answer Successful: \n', response.data);
      res.status(201).send('Answer created successfully')

    })
    .catch((err) => {
      console.error('-- Add Answer FAILED: \n', err);
      res.status(500).send(err);
    });
}

module.exports = {
  addAnswer
}