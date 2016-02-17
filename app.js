var location = require('./location.js');
var weather = require('./weather.js');

// setup yargs to have a --location or -l argument
var argv = require('yargs')
    .option('location', {
        demand: false,
        alias: 'l',
        description: 'City to get weather report',
        type: 'string'

    })
    .help('help')
    .argv;

if (argv.location) {
    weather(argv.location, function (currentWeather) {
        console.log(currentWeather);
    });
}
else {
    location(function (location) {
        var city = location.city;
        weather(city, function (currentWeather) {
            console.log(currentWeather);
        });
    });
}


