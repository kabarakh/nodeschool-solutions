// include the Lo-Dash library
var _ = require("lodash");


//** Everyone Is Min **//
var worker = function(input) {

	var isHotterThan19 = function(temperature) {
		return temperature > 19;
	};

	var townCollection = {
		hot: [],
		warm: []
	};

	_.forEach(input, function(temperatureList, town) {
		if (_.every(temperatureList, isHotterThan19)) {
			townCollection.hot.push(town);
		} else if (_.some(temperatureList, isHotterThan19)) {
			townCollection.warm.push(town);
		}
	});

	return townCollection;
};

// export the worker function as a nodejs module
module.exports = worker;
