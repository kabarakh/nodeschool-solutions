// include the Lo-Dash library
var _ = require("lodash");


//** Getting Started **//
var worker = function(input) {
	return _.where(input, {active: true});
};

// export the worker function as a nodejs module
module.exports = worker;
