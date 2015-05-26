'use strict';

process.argv.splice(0, 2);
var args = process.argv;

var qio = require('q-io/http');

var promise = qio.read('http://localhost:1337');

promise.then(function(json) {
	console.log(JSON.parse(json));
});