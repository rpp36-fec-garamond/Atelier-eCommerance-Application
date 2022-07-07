const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const authedGet = require('./helper.js').authedGet;
const authedPost = require('./helper.js').authedPost;

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/products', (req, res) => {
  authedGet('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products')
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => {
      res.sendStatus(400);
    })
})

app.post('/products', (req, res) => {
  authedPost('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products', req.data)
    .then((results) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      res.sendStatus(400);
    })
})

app.listen(port, () => {
  console.log(`listening at port ${port}`);
})