'use strict';

// always get rid of process.argv 0 and 1 and then write the remaining to the var args - makes it easier
process.argv.splice(0, 2);
var args = process.argv;

//** TELL ME WHAT IS WRONG **//
var assert = require('assert');
var isCoolNumber = require(args[0]);
assert.ok(isCoolNumber(42));
