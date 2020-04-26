const request = require('request')
const geocode = require('./utils/geocode')

/*const url1 = 'http://api.weatherstack.com/current?access_key=8119a0fabab1dc3adb7e40c1c2fce55d&query=New%20York'

request({url: url1, json: true}, (error, response) => {

    if (error) {
        console.log("Unable ton connect to weather service.")
    }
    else if(response.body.error) {
        console.log(response.body.error)
    }
    else {
        const current = response.body.current

        console.log
            (current.weather_descriptions + ". It is currently " + current.temperature +
                " degrees out. It feels like " + current.feelslike + " degrees out.")

    }
})


const url2 = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZml6enk1OSIsImEiOiJjazloNG13YjYwNTNoM29xbTV4b3ltb3ZzIn0.Yt1RgdqdFQGS-nsGj8aBJQ&limit=1"

request({url: url2, json: true}, (error, response) => {
    if(error){
        console.log("Unable ton connect to weather service.")

    }
    else if(response.body.features.length === 0)
    {
        console.log('Unable to find location. try another search')
    }
    else {

    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]

    console.log("Welcome to LA, Latitude is " + latitude + " Longitude is " + longitude )
    }
})*/

// const geocode = (address, callback) => {
//     const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + 'json?access_token=pk.eyJ1IjoiZml6enk1OSIsImEiOiJjazloNG13YjYwNTNoM29xbTV4b3ltb3ZzIn0.Yt1RgdqdFQGS-nsGj8aBJQ&limit=1'
//
//     request({url: url, json: true}, (error, response) => {
//         if(error) {
//             callback('Unable ton connect to weather service.', undefined)
//         }
//         else if (response.body.features.length === 0)
//         {
//             callback('Unable to find location. Try another search', undefined)
//         } else {
//             callback(undefined, {
//                latitude: response.body.features[0].center[1],
//                 longitude: response.body.features[0].center[0],
//                 location: response.body.features[0].place_name
//             })
//         }
//     })
// }

geocode('Boston', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})