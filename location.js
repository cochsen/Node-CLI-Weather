module.exports = function (callback) {
    var request = require('request');
    var url = 'http://ipinfo.io';
    request({
        url: url,
        json: true
        },
        function (err, res, body) {
        if (err) {
            callback("Unable to get location.");
        }
        else {
            //console.log(JSON.stringify(body, null, 4));
            callback(body);
        }
    });
}