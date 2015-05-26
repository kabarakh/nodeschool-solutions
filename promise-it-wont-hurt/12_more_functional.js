'use strict';

process.argv.splice(0, 2);
var args = process.argv;

var qio = require('q-io/http');

// same as 11 because I think this is better code style
var promise = qio.read('http://localhost:7000');

promise.then(function(id) {
	return qio.read('http://localhost:7001/' + id);
}).then(function(json) {
	console.log(JSON.parse(json));
});