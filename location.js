module.exports = function () {
  return new Promise(function (resolve, reject) {
    var request = require('request');
    var url = 'http://ipinfo.io';
    request({
          url: url,
          json: true
        },
        function (err, res, body) {
        if (err) {
          return reject("Unable to get location.");
        }
        else {
          return resolve(body);
        }
      });
    });
};
