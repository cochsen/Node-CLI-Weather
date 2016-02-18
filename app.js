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
  weather(argv.location).then(function (message) {
    console.log(message);
  }).catch(function (error) {
    console.log(error);
  });
}
else {
    console.log("Location was not provided.");
    location().then(function (loc) {
      return weather(loc.city);
    }).then(function (message) {
      console.log(message);
    }).catch(function (error) {
      console.log(error);
    });
}
