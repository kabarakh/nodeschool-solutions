'use strict';

process.argv.splice(0, 2);
var args = process.argv;

var q = require('q');

//** fulfill_a_promise **//
var defered = q.defer();

defered.promise.then(console.log);

setTimeout(function () {
	defered.resolve('RESOLVED!');
}, 300);
