//** TIME SERVER **//
var net = require('net');

var getTwoDigitNumberString = function(inputNumber) {
	return ('0' + inputNumber).substr(-2, 2);
};

var server = net.createServer(function(socket) {

	var date = new Date();

	var dateObj = {
		year: date.getFullYear(),
		month: getTwoDigitNumberString(date.getMonth() + 1),
		day: getTwoDigitNumberString(date.getDate()),
		hours: getTwoDigitNumberString(date.getHours()),
		minutes: getTwoDigitNumberString(date.getMinutes())
	};

	var dateTime = dateObj.year + '-' + dateObj.month + '-' + dateObj.day + ' ' + dateObj.hours + ':' + dateObj.minutes + '\n';

	socket.end(dateTime);
});
server.listen(process.argv[2]);
