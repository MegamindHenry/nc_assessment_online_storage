const express = require('express');
// enable cors
const cors = require('cors');
// json request
const bodyParser = require('body-parser');

const getApiKey = require('./keyVault');

const app = express();

const resError = {
  unauthorized: {
    error : 'unauthorized'
  }
};

// enable cors
app.use(cors());
// parse json request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// check user id
app.use((req, res, next) => {
  const reqBody = req.body;  
  if ('apiKey' in reqBody) {
    getApiKey().then(apiKey => {
      if (reqBody.apiKey == apiKey.value) {
        next();
      } else {
        res.send(resError.unauthorized);
      }
    });
  } else {
    res.send(resError.unauthorized);
  }
});

// reture json format
app.use(express.json());

app.get('/', (req, res) => {
  res.send({hello: 'world'});
});

app.post('/', (req, res) => {
  const reqBody = req.body;
  res.send(reqBody);
});

module.exports = app;