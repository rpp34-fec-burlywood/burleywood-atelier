const express = require('express');
const productRouter = require('./routers/productRouter.js');
const cartRouter = require('./routers/cartRouter')

require('dotenv').config();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY;


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../public'));


const logger = (req, res, next) => {
  // console.log(`${req.method} ${req.url}`);
  // if (Object.keys(req.params).length > 0) {
  //   console.log('Request Params:', req.params);
  // }
  // if (Object.keys(req.query).length > 0) {
  //   console.log('Request Query:', req.query);
  // }
  // if (Object.keys(req.body).length > 0){
  //   console.log('Request Body:', req.body);
  // }
  next();
}

//Mount the router as middleware at path /products
app.use('/products', productRouter)
app.use('/cart', cartRouter)
app.use(logger);

// app.get('/products', overview.getProducts);
// app.get('/products/:product_id', overview.getProductById);
const axios = require('axios');
require('dotenv').config();


axios({
  method: 'POST',
  url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/cart`, 
  headers: {'Authorization': API_KEY},
  data: {sku_id: 64620}
})
  .then((response) => {
    console.log('-- Get All Products OK\n', response);
  })
  .catch((err) => {
    console.log(err)
    // console.log('-- Get All Products FAILED:', err.response.data);
  });

app.listen(PORT, () => {
  console.log('Listening on port: ', PORT);
})

