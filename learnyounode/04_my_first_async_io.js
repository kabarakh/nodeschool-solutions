//** MY FIRST ASYNC I/O **//
var fs = require('fs');
var fileContents;

fs.readFile(process.argv[2], {encoding: 'utf8'}, function(error, data) {
	fileContents = data;
	var numberOfNewlines = fileContents.match(/\n/g).length;
	console.log(numberOfNewlines);
});