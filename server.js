'use strict'
let express = require('express');
let mongoose = require('mongoose');
let port = process.env.PORT || 3000;
let logger = require('morgan');
let cors = require('cors');
let bodyParser = require('body-parser');
let methodOverride = require('method-override');
var app = express();

mongoose.connect("mongodb://localhost/MeanMapApp");

app.use(express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
app.use(methodOverride());

// require('./app/routes.js')(app);

app.listen(port);
console.log('listening port ' + port);
