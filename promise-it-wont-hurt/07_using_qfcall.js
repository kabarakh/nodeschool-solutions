'use strict';

process.argv.splice(0, 2);
var args = process.argv;

var q = require('q');


//** using_qfcall **//
 q.fcall(JSON.parse, args[0]).then(console.log, console.log);
