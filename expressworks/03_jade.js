'use strict';

process.argv.splice(0, 2);
var args = process.argv;

var jade = require('jade');
var express = require('express');
var path = require('path');

var app = express();

app.set('view engine', 'jade');
app.set('views', args[1] || path.join(__dirname, 'templates'));
app.get('/home', function(request, response) {
	response.render('index', {date: new Date().toDateString()});
});

app.listen(args[0]);