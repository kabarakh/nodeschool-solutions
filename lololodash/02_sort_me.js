// include the Lo-Dash library
var _ = require("lodash");


//** Sort Me **//
var worker = function(input) {
	return _.sortBy(input, function(value) {
		return 0 - value.quantity;
	});
};

// export the worker function as a nodejs module
module.exports = worker;
