'use strict';

// always get rid of process.argv 0 and 1 and then write the remaining to the var args - makes it easier
process.argv.splice(0, 2);
var args = process.argv;

//** TAPE IT TOGETHER **//
var test = require('tape');
var fancify = require(args[0]);

test('fancify is fancy', function (t) {
	t.equals(fancify('Hello'), '~*~Hello~*~');
	t.equals(fancify('Hello', true), '~*~HELLO~*~');
	t.equals(fancify('Hello', false, '!'), '~!~Hello~!~');
	t.equals(fancify('Hello', true, 'abc'), '~abc~HELLO~abc~');

	t.end();
});