// include the Lo-Dash library
var _ = require("lodash");


//** Count the Comments **//
var worker = function(input) {
	var grouped = _.groupBy(input, 'username');

	var countPerUser = [];
	_.forEach(grouped, function(item, username) {
		countPerUser.push({username: username, comment_count: _.size(item)});
	});

	countPerUser = _.sortBy(countPerUser, 'comment_count').reverse();

	return countPerUser;
};

// export the worker function as a nodejs module
module.exports = worker;
