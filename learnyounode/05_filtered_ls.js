//** FILTERED LS **//
var fs = require('fs'), path = require('path');
fs.readdir(process.argv[2], function(error, files) {
	files.forEach(function(file) {
		if ('.' + process.argv[3] === path.extname(file)) {
			console.log(file);
		}
	});
});
