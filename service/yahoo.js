'use strict';

const
  request = require('request');

// GET WEATHER FROM API
var getWeather = function (location) {
  return new Promise(function (resolve, reject) {
    var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22'+ location +'%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          var jsonData = JSON.parse(body)
          var forecast = jsonData.query.results.channel.item.forecast[0].text
          console.log('WEATHER API SAYS....', jsonData.query.results.channel.item.forecast[0].text)
          return forecast
        }
      })
  })
}

module.exports = {
  getWeather: getWeather
}



// var getWeather = function (location) {
//   return new Promise(function (resolve, reject) {
//     var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22'+ location +'%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'
//     request(url, function (error, response, body) {
//         if (!error && response.statusCode == 200) {
//           var jsonData = JSON.parse(body)
//           var forecast = jsonData.query.results.channel.item.forecast[0].text
//           console.log('WEATHER API SAYS....', jsonData.query.results.channel.item.forecast[0].text)
//           resolve(forecast);
//         }
//       })
//   })
// }