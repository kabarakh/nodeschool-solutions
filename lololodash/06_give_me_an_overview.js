// include the Lo-Dash library
var _ = require("lodash");


//** Give Me An Overview **//
var worker = function(input) {

	var grouped = _.groupBy(input, 'article');
	var unsorted = [];

	_.forEach(grouped, function(item, article) {
		var total_orders;

		if (_.size(item) === 1) {
			total_orders = item[0].quantity;
		} else {
			total_orders = _.reduce(item, function(result, item) {
				return result += Number(item.quantity);
			}, 0);

		}
		unsorted.push({article: Number(article), total_orders: total_orders});

	});

	return _.sortBy(unsorted, function(value) {
		return -value;
	});

};

// export the worker function as a nodejs module
module.exports = worker;
