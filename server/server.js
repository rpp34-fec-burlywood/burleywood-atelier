const express = require('express');
const productRouter = require('./routers/productRouter.js');
const cartRouter = require('./routers/cartRouter');
const qAndARouter = require('./routers/qAndARouter');
const { default: axios } = require('axios');

require('dotenv').config();
const PORT = process.env.PORT || 3000;

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

//Mount the routers to their routes
app.use('/products', productRouter)
app.use('/cart', cartRouter)
app.use('/qa', qAndARouter);
app.use(logger);


app.listen(PORT, () => {
  console.log('Listening on port: ', PORT);
})