const express = require('express');
const axios = require('axios');

require('dotenv').config();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY;


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../public'));

app.get('/ping', (req, res) => {
  res.send('pong')
});

app.get('/api/products', (req, res) => {
  axios({
    method: 'GET',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products',
    headers: { Authorization: API_KEY }
  })
    .then((response)=>{
      console.log('-- Get Products OK\n', response.data)
      res.status(200);
      res.send(response.data);
    })
    .catch((err)=>{
      console.log('-- Get Products FAILED\n', err);
      res.status(500);
      res.send(err);
    });
});

app.listen(PORT, () => {
  console.log('Listening on port: ', PORT);
})