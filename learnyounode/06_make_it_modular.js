//** MAKE IT MODULAR **//
var filteredLs = require('./06.1_filteredLs');

filteredLs(process.argv[2], process.argv[3], function(error, files) {
	files.forEach(function(file) {
		console.log(file);
	});
});