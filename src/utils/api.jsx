var Fetch = require('whatwg-fetch');
var rootUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apiUrl = '&appid=0effc1b589f7870bc53d135cd7484489';

module.exports = {
    get: function(place) {
        return fetch(rootUrl + place + apiUrl, {
            headers: {
                // No need for special headers
            }
        })
        .then(function(response) {
            console.log(response);
            return response.json();
        });
    }
};