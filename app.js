var location = require('./location.js');
var weather = require('./weather.js');

weather(function (currentWeather) {
    console.log(currentWeather);
});

location(function (location) {
   console.log('city: ' + location.city);
   console.log('long/lat: ' + location.loc);
});