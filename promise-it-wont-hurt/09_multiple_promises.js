'use strict';

process.argv.splice(0, 2);
var args = process.argv;

var q = require('q');


//** multiple promises **//
var all = function(firstPromise, secondPromise) {
	var defered = q.defer();

	var successfullPromises = 0;
	var returnValue = [];

	firstPromise.then(function(data) {
		returnValue[0] = data;
		successfullPromises++;

		if (successfullPromises === 2) {
			defered.resolve(returnValue);
		}
	}, function() {
		defered.reject();
	});

	secondPromise.then(function(data) {
		returnValue[1] = data;
		successfullPromises++;

		if (successfullPromises === 2) {
			defered.resolve(returnValue);
		}
	}, function() {
		defered.reject();
	});

	return defered.promise;
};


var firstOuterDefered = q.defer();
var secondOuterDefered = q.defer();

all(firstOuterDefered.promise, secondOuterDefered.promise).then(console.log);

setTimeout(function() {
	firstOuterDefered.resolve('PROMISES');
	secondOuterDefered.resolve('FTW');
}, 200);