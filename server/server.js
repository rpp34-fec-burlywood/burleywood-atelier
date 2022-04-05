const express = require('express');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT;
const API_KEY = process.env.API_KEY;


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../public'));

app.get('/ping', (req, res) => {
  res.send('pong')
});

app.listen(PORT, () => {
  console.log('Listening on port: ', PORT);
})