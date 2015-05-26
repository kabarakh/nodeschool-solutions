'use strict';

process.argv.splice(0, 2);
var args = process.argv;

var express = require('express');

var app = express();

app.get('/search', function (request, response) {
	response.send(request.query);
});

app.listen(args[0]);