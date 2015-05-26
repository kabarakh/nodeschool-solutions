'use strict';

process.argv.splice(0, 2);
var args = process.argv;

var express = require('express');

var app = express();

app.put('/message/:id', function (request, response) {
	var id = request.params.id;

	response.end(require('crypto')
			.createHash('sha1')
			.update(new Date().toDateString() + id)
			.digest('hex')
	);
});

app.listen(args[0]);