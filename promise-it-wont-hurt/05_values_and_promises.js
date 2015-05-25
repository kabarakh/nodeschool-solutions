'use strict';

process.argv.splice(0, 2);
var args = process.argv;

var q = require('q');

//** values_and_promises **//
var defered = q.defer();

var attachTitle = function (inputString) {
	return 'DR. ' + inputString;
};

defered.promise.then(attachTitle).then(console.log);

defered.resolve('MANHATTAN');