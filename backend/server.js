var express = require('express');
var app = express();
var router = express.Router();
var app = new express();
var bodyParser = require("body-parser");
const fetch = require('node-fetch');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/saveData", function (req, res, next) {
  console.log(req)
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.send({status : 'dataSaved'});
});
var server = app.listen(5000, function () {
 console.log('Server is running..');
});