//** HTTP JSON API SERVER **//
var http = require('http'), url = require('url');

var getTwoDigitNumberString = function(inputNumber) {
	return ('0' + inputNumber).substr(-2, 2);
};

var server = http.createServer(function(request, response) {
	response.writeHead(200, { 'Content-Type': 'application/json' });

	var urlObject = url.parse(request.url, true);

	var date = new Date(urlObject.query.iso);

	var returnObject = {};

	if (urlObject.pathname === '/api/parsetime') {

		returnObject = {
			hour: date.getHours(),
			minute: date.getMinutes(),
			second: date.getSeconds()
		};

	} else if (urlObject.pathname === '/api/unixtime') {

		returnObject = {unixtime: date.getTime()};

	}

	response.write(JSON.stringify(returnObject));

	response.end();

});
server.listen(process.argv[2]);