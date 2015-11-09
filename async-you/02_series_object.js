var http = require('http');
var async = require('async');
var fs = require('fs');


process.argv.splice(0, 2);


async.series({

    requestOne: function (callback) {
        var httpBody = '';
        http.get(process.argv[0], function (response) {
            response.on('data', function (data) {
                httpBody += data.toString();
            });
            response.on('end', function () {
                callback(null, httpBody);
            });
        });
    },

    requestTwo: function (callback) {
        var httpBody = '';
        http.get(process.argv[1], function (response) {
            response.on('data', function (data) {
                httpBody += data.toString();
            });
            response.on('end', function () {
                callback(null, httpBody);
            });
        });
    }

}, function (err, result) {
    if (err) return console.error(err);
    console.log(result);
});