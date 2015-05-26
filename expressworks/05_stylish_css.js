'use strict';

process.argv.splice(0, 2);
var args = process.argv;

var express = require('express');
var stylus = require('stylus');
var app = express();

app.use(stylus.middleware(args[1]));
app.use(express.static(args[1]));
app.listen(args[0]);