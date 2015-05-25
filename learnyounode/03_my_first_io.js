//** MY FIRST I/O **//
var fs = require('fs');

var fileContents = fs.readFileSync(process.argv[2], 'utf8');

var numberOfNewlines = fileContents.match(/\n/g).length;
console.log(numberOfNewlines);