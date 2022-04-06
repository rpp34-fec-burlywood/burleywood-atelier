const express = require('express');
const axios = require('axios');
const overview = require('./overviewAPI.js');

require('dotenv').config();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY;


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../public'));

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  if (Object.keys(req.params).length > 0) {
    console.log('Request Params:', req.params);
  }
  if (Object.keys(req.query).length > 0) {
    console.log('Request Query:', req.query);
  }
  if (Object.keys(req.body).length > 0){
    console.log('Request Body:', req.body);
  }
  next();
}

app.use(logger);

app.get('/ping', (req, res) => {
  res.send('pong')
});

app.get('/products', overview.getProducts);
app.get('/products/:product_id', overview.getProductById);


app.listen(PORT, () => {
  console.log('Listening on port: ', PORT);
})

