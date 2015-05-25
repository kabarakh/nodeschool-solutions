// include the Lo-Dash library
var _ = require("lodash");


//** Analyze **//
var worker = function(input) {
	var ordered = _.sortBy(input, 'income');

	var sum = _.reduce(ordered, function(result, item) {
		return result += item.income;
	}, 0);

	var average = sum / _.size(ordered);

	var underperform = _.filter(ordered, function(item) {
		return item.income <= average;
	});

	var overperform = _.filter(ordered, function(item) {
		return item.income > average;
	});

	return {
		average: average,
		underperform: underperform,
		overperform: overperform
	}
};

// export the worker function as a nodejs module
module.exports = worker;
