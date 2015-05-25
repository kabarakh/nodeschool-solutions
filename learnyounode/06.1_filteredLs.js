module.exports = function(directory, extension, callback) {

	var fs = require('fs'), path = require('path');

	var filteredFiles = [];

	fs.readdir(directory, function(error, files) {
		if (error) {
			return callback(error);
		}

		files.forEach(function(file) {
			if ('.' + extension === path.extname(file)) {
				filteredFiles.push(file);
			}
		});

		callback(null, filteredFiles);
	});

};