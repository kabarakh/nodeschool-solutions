'use strict';

// always get rid of process.argv 0 and 1 and then write the remaining to the var args - makes it easier
process.argv.splice(0, 2);
var args = process.argv;

//** TO ERR IS HUMAN, TO PURR FELINE **//
var test = require('tape');
var feedCat = require(args[0]);

test('yay', function (t) {
	t.equal(feedCat('something'), 'yum');
	t.equal(feedCat('blubb'), 'yum');
	t.throws(function () {
		feedCat('chocolate')
	});

	t.end();
});