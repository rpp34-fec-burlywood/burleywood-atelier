const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../public'));

app.get('/ping', (req, res) => {
  res.send('pong')
});

app.listen(PORT, () => {
  console.log('Listening on port: ', PORT);
})