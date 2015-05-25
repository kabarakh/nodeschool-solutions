// include the Lo-Dash library
var _ = require("lodash");


//** Start Templating **//
var worker = function(input) {
	return _.template('Hello <%= name %> (logins: <%= loginCount %>)')({
		name: input.name,
		loginCount: _.size(input.login)
	});
};

// export the worker function as a nodejs module
module.exports = worker;
