const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/899b1bdf0e717bfc0f8f3b89066b925c/' + latitude + ',' + longitude

    request({url, json: true}, (error, { body }) => {
        if(error){
            callback('Unable to connect weather service!', undefined)
        }else if(body.error){
            callback('Unable to find location', undefined)
        }else{
            callback(undefined, body.daily.data[0].summary + 'It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain. Humidity : ' + body.currently.humidity + ' and Wind speed : ' + body.currently.windSpeed
            )
        }
    })
}

module.exports = forecast