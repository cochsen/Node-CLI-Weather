module.exports = function (callback) {  
    console.log('Got weather!');
    var request = require('request');
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=Philadelphia&units=imperial&appid=44db6a862fba0b067b1930da0d769e98';
    request({
        url: url, 
        json: true
        }, 
        function (err, res, body) {
        if (err) {
            callback("Unable to fetch weather.");
        }
        else {
            //console.log(JSON.stringify(body, null, 4));
            var temp = body.main.temp;
            var name = body.name;
            callback("It's " + temp + " in " + name);
        }
    });    
}