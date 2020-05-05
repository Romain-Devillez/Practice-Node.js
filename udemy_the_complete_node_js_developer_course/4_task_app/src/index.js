const express = require('express')
require('./db/mangoose')

// Model for database
const User = require('./models/user')
const Task = require('./models/task')

// Router
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')


const app = express()
const port = process.env.PORT || 3000


// Parse JSON
app.use(express.json())

// File Route
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('Server is up on port : ' + port)
})

