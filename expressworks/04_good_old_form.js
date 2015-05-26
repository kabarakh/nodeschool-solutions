'use strict';

process.argv.splice(0, 2);
var args = process.argv;

var express = require('express');
var bodyparser = require('body-parser');

var app = express();

app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', function(request, response) {
	var body = request.body;

	var returnString = body.str.split('').reverse().join('');

	response.end(returnString);
});

app.listen(args[0]);