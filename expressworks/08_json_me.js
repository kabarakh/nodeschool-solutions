'use strict';

process.argv.splice(0, 2);
var args = process.argv;

var express = require('express');
var fs = require('fs');

var app = express();

app.get('/books', function (request, response) {
	fs.readFile(args[1], {encoding: 'utf8'}, function(error, content) {
		content = JSON.parse(content);
		response.json(content);
	})
});

app.listen(args[0]);