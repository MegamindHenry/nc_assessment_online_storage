const express = require('express')
// enable cors
const cors = require('cors');
// json request
const bodyParser = require('body-parser');

const app = express()
const port = 3001

// enable cors
app.use(cors());
// parse json request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// reture json format
app.use(express.json());

app.get('/', (req, res) => {
  const req_body = req.body;
  res.send(req_body);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})