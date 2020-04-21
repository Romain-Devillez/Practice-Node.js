const express = require('express');

// Package : Extrait l'objet JSON de la demande
const bodyParser = require('body-parser');

// Package : Facilite les interactions avec une base mongoDB
const mongoose = require('mongoose');

// Importation de notre routeur
const stuffRoutes = require('./routes/stuff');


const app = express();

// Connection a MongoDB Atlas
mongoose.connect('mongodb+srv://root:root@test-40bge.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true,
        useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

// Définition des Headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Bundle pour parser du JSON
app.use(bodyParser.json());

// Importation du router
app.use('/api/stuff', stuffRoutes);

module.exports = app;
