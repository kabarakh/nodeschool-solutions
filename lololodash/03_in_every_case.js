// include the Lo-Dash library
var _ = require("lodash");


//** In Every Case **//
var worker = function(input) {
	return _.forEach(input, function(item, index, collection) {
		if (item.population > 1) {
			item.size = 'big';
		} else if (item.population < 0.5) {
			item.size = 'small';
		} else {
			item.size = 'med';
		}
	});
};

// export the worker function as a nodejs module
module.exports = worker;
