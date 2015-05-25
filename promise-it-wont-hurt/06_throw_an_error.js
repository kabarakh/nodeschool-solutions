'use strict';

process.argv.splice(0, 2);
var args = process.argv;

var q = require('q');

//** throw_an_error **//
var parsePromised = function (input) {
	var defered = q.defer();

	try {
		defered.resolve(JSON.parse(input));
	} catch (error) {
		defered.reject(error);
	}

	return defered.promise;
};

parsePromised(args[0]).then(console.log, console.log);
