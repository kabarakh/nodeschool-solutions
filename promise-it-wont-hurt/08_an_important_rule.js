'use strict';

process.argv.splice(0, 2);
var args = process.argv;

var q = require('q');

//** an_important_rule **//
var throwMyGod = function () {
	throw Error('OH NOES');
};

var iterate = function (numberToIterate) {
	console.log(numberToIterate);
	return (numberToIterate + 1);
};

q.fcall(iterate, 1)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(throwMyGod)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(null, console.log);


