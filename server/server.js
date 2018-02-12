const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/mytest', function(error){
    if(error) console.log(error);
    console.log("connection successful");
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var index = require('./router/index');
app.use('/',index);

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/public')));

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});