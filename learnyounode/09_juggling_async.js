//** JUGGLING ASYNC **//
var http = require('http');

process.argv.splice(0, 2);

var callbackResults = {};
var callbackCounter = 0;

var checkCallbacksAndOutput = function() {
	if (callbackCounter === 0) {
		process.argv.forEach(function(url) {
			console.log(callbackResults[url]);
		});
	}
};

process.argv.forEach(function(url) {
	callbackResults[url] = '';
	callbackCounter++;

	http.get(url, function(response) {

		response.setEncoding('utf8');
		var output = '';

		response.on('error', console.error);

		response.on('data', function(data) {
			output += data;
		});

		response.on('end', function() {
			callbackResults[url] = output;
			callbackCounter--;
			checkCallbacksAndOutput();
		})
	});
});
