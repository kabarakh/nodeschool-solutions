'use strict';

// always get rid of process.argv 0 and 1 and then write the remaining to the var args - makes it easier
process.argv.splice(0, 2);
var args = process.argv;

//** LOG IT OUT ***//
var emotify = require(args[0]);
console.log(emotify(args[1]));