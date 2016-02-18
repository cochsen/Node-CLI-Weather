module.exports = function (location) {
  return new Promise(function (resolve, reject) {
    var request = require('request');
    var appId = require('./appid.js');
    var apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
    var units = 'units=imperial';
    var url = apiUrl + location + '&' + units + '&' + appId;
    request({
          url: url,
          json: true
        },
        function (err, res, body) {
        if (err) {
          return reject("Unable to fetch weather.");
        }
        else {
          console.log('Got weather!');
          return resolve("It's " + body.main.temp + " in " + body.name);
        }
      });
    });
};
