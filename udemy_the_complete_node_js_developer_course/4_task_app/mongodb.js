
const { MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
    if (error) {
        console.log('Unable to connect to database')
    }

    console.log('Connect ok')

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Romain',
    //     age: 26
    // }, (error, result) => {
    //     if (error) {
    //         console.log('Unable to insert User')
    //     }
    //
    //     console.log(result.ops)
    // })

    db.collection('users').insertMany([
        {
            name: 'Julien',
            age: 29
        },
        {
            name: 'Loetitia',
            age: 45
        }

    ], (error, result) => {
        if (error) {
            console.log('Unable to insert documents')
        }

        console.log(result.ops)
    })
})