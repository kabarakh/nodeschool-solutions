'use strict';

process.argv.splice(0, 2);
var args = process.argv;

var q = require('q');


//** to_reject_or_not_to_reject **//
var defered = q.defer();

defered.promise.then(console.log, console.log);
defered.resolve('I FIRED');
defered.reject('I DID NOT FIRE');

