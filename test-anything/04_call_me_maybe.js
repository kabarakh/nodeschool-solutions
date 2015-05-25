'use strict';

// always get rid of process.argv 0 and 1 and then write the remaining to the var args - makes it easier
process.argv.splice(0, 2);
var args = process.argv;

//** CALL ME MAYBE **//
var test = require('tape');
var repeatCallback = require(args[0]);

test('whatever', function (t) {
	t.plan(5);
	repeatCallback(5, function () {
		t.pass('called');
	});
});