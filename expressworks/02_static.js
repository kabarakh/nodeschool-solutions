'use strict';

process.argv.splice(0, 2);
var args = process.argv;

var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(args[1] || path.join(__dirname, 'public')));
app.listen(args[0]);