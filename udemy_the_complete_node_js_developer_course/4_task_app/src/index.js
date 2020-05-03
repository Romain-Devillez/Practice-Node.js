const express = require('express')
require('./db/mangoose')

const User = require('./models/user')
const Task = require('./models/task')


const app = express()
const port = process.env.PORT || 3000

// Parse JSON
app.use(express.json())

// Get route for show All Users
app.get('/users', (req, res) => {
    User.find({}).then( (users) => {
        res.status(200).send(users)
    }).catch( () => {
        res.status(500).send()
    })
})

// Get route for show One User with Id params
app.get('/users/:id', (req, res) => {
    const _id = req.params.id

    User.findById(_id).then( (user) => {
        if (!user) {
            return res.status(400).send()
        }
        res.send(user)
    }).catch( () => {
        res.status(500).send()
    })
})

// Post route for Insert User
app.post('/users', (req, res) => {
    const user = new User(req.body)

    user.save().then( () => {
        res.status(201).send(user)
    }).catch( (e) => {
        res.status(400).send(e)
    })
})

// Post route for Insert Task
app.post('/task', (req, res) => {
    const task = new Task(req.body)

    task.save().then( () => {
        res.status(201).send(task)
    }).catch( (e) => {
        res.status(400).send(e)
    })
})



app.listen(port, () => {
    console.log('Server is up on port : ' + port)
})