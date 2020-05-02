
const { MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
    if (error) {
        console.log('Unable to connect to database')
    }

    console.log('Connect ok')

    const db = client.db(databaseName)

    db.collection('users').findOne({ name: 'Romain'}, (error, user) => {
        if (error) {
            return console.log('Unable to Fetch')
        }

        console.log(user)
    })

    db.collection('users').find({age: 26}).toArray((error, users) => {
        console.log(users)
    })
})