'use strict';

process.argv.splice(0, 2);
var args = process.argv;

var express = require('express');
var app = express();

app.get('/home', function(request, result) {
	result.end('Hello World!');
});
app.listen(args[0]);