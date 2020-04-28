const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

// Set express for template handlebars version
app.set('view engine', 'hbs')

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
        res.render('index', {
            title: 'Weather App',
            name: 'Andrew Mead'
        })
    })

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About page',
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: '',
        location: ''
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'help page',
        helper: 'You nedd help ?'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})