// Modules
const express = require('express');
const morgan = require('morgan');
const config = require('./config');

// Variables globales
const app = express();
let port = config.express.port;
const options = {
    root: __dirname + '/views'
}

// Middlewares
app.use(morgan('dev'));
app.use(express.static(options.root))

// Routes
app.get('/', (req, res) => {
    res.redirect('/home');
})

app.get('/home', (req, res) => {
    res.sendFile('index.html', options )
})

app.get('/params/:name', (req, res) => {
    res.send(req.params.name);
})


// Start application
app.listen(port, () => console.log('On port ' + port))