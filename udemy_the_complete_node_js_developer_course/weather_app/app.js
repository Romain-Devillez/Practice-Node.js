const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=8119a0fabab1dc3adb7e40c1c2fce55d&query=New%20York'

request({url: url, json: true}, (error, response) => {
    const current = response.body.current

    console.log
        (current.weather_descriptions + ". It is currently " + current.temperature + " degrees out. It feels like " + current.feelslike + " degrees out.")
})