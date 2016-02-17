module.exports = function (location, callback) {  
    var appId = require('./appid.js');
    var apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
    var units = 'units=imperial';
    // encode URL
    encodeURIComponent(location);
    if (!location)
        callback('No location provided');
    console.log('Got weather!');
    var request = require('request');
    var url = apiUrl + location + '&' + units + '&' + appId;
    request({
        url: url, 
        json: true
        }, 
        function (err, res, body) {
        if (err) {
            callback("Unable to fetch weather.");
        }
        else {
            var temp = body.main.temp;
            var name = body.name;
            callback("It's " + temp + " in " + name);
        }
    });    
}