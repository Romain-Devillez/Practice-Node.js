const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Set express for templates handlebars version
app.set('view engine', 'hbs')
// Set express for custome view directory
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
        res.render('index', {
            title: 'Home page',
            name: 'Romain'
        })
    })

app.get('/about', (req, res) => {
    res.render('About page', {
        title: 'About page',
        name: 'Romain'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        title: 'Weather page',
        forecast: '',
        location: '',
        name: 'Romain'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help page',
        name: 'Romain'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})