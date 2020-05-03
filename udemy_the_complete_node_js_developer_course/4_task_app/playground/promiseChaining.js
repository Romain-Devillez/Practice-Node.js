require('../src/db/mangoose')
const  User = require('../src/models/user')
const  Task = require('../src/models/task')



// User.findByIdAndUpdate('5ead87b0cd972e2340f44bf2', { age: 1}).then( (user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1})
// }).then( (result) => {
//     console.log(result)
// }).catch( (e) => {
//     console.log(e)
// })
//
// Task.findByIdAndRemove('5ead89e9ee46fa24630a43d3').then( (task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false})
// }).then( (result) => {
//     console.log(result)
// }).catch( (e) => {
//     console.log(e)
// })

// const updateAgeAndCount = async (id, age) => {
//     const user = await User.findByIdAndUpdate(id,{ age })
//     const count = await User.countDocuments({ age })
//     return  count
// }
//
// updateAgeAndCount('5ead87b0cd972e2340f44bf2', 1).then( (count) => {
//     console.log(count)
// }).catch( (e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndRemove(id)
    const count = await Task.countDocuments({ completed: false})
    return count
}

deleteTaskAndCount('5ead94d7ddab6a2bdb2c0e10').then( (count) => {
    console.log(count)
}).catch( (e) => {
    console.log(e)
})
