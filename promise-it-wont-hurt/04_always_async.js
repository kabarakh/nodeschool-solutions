'use strict';

process.argv.splice(0, 2);
var args = process.argv;

var q = require('q');


//** always_async **//
var defered = q.defer();

defered.promise.then(console.log, console.log);
defered.resolve('SECOND');
console.log('FIRST');
