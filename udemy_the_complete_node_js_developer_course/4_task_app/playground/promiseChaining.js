require('../src/db/mangoose')
const  User = require('../src/models/user')


User.findByIdAndUpdate('5ead87b0cd972e2340f44bf2', { age: 1}).then( (user) => {
    console.log(user)
    return User.countDocuments({ age: 1})
}).then( (result) => {
    console.log(result)
}).catch( (e) => {
    console.log(e)
})