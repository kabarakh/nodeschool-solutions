var http = require('http');
var async = require('async');
var fs = require('fs');


process.argv.splice(0, 2);

async.waterfall([

    function(callback) {
        fs.readFile(process.argv[0], {encoding: 'utf8'}, function(error, data) {
            callback(null, data);
        });
    },

    function(fileContent, callback) {
        var httpBody = '';
        http.get(fileContent, function(response) {
            response.on('data', function(data) {
                httpBody += data.toString();
            });
            response.on('end', function() {
                callback(null, httpBody);
            });
        });
    }

], function(err, result){
    if (err) return console.error(err);
    console.log(result);
});