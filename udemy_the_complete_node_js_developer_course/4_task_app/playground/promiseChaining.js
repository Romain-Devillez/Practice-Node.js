require('../src/db/mangoose')
const  User = require('../src/models/user')
const  Task = require('../src/models/task')



User.findByIdAndUpdate('5ead87b0cd972e2340f44bf2', { age: 1}).then( (user) => {
    console.log(user)
    return User.countDocuments({ age: 1})
}).then( (result) => {
    console.log(result)
}).catch( (e) => {
    console.log(e)
})

Task.findByIdAndRemove('5ead89e9ee46fa24630a43d3').then( (task) => {
    console.log(task)
    return Task.countDocuments({ completed: false})
}).then( (result) => {
    console.log(result)
}).catch( (e) => {
    console.log(e)
})