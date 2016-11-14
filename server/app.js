'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var routes = require('./routes/routes');
require('dotenv').config();

var port = process.env.NODE_PORT || 3000;
var app = express();

app.use(cors());
app.use(bodyParser.json());


// mount routes
app.use('/api', routes);

app.listen(port, function(){
  console.log('Application is running on port:', port);
});
