'use strict';

process.argv.splice(0, 2);
var args = process.argv;

var q = require('q');

//** reject_a_promise **//
var defered = q.defer();

defered.promise.then(function () {
}, function (error) {
	console.log(error);
});

setTimeout(function () {
	defered.reject('REJECTED!');
}, 300);

