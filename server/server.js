const express = require('express');
const productRouter = require('./routers/productRouter.js');
const cartRouter = require('./routers/cartRouter');
const qAndARouter = require('./routers/qAndARouter');
const reviewRouter = require('./routers/reviewRouter');
const path = require('path');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' });
const compression = require('compression');
const cloudinaryUploadImage = require('./cloudinaryHelper.js');

require('dotenv').config();
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

app.use(express.static(__dirname + '/../public'));

app.use('/productPage/:product', express.static(__dirname + '/../public'));

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

app.post('/uploadPhotos', upload.array('photos', 5), (req, res) => {
  cloudinaryUploadImage(req.files)
    .then(urls => {
      res.status(201).json({ urls });
    })
});

//Mount the routers to their routes
app.use('/products', productRouter);
app.use('/cart', cartRouter);
app.use('/qa', qAndARouter);
app.use('/reviews', reviewRouter);

app.use(logger);


app.listen(PORT, () => {
  console.log('Listening on port: ', PORT);
})