
const { MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
    if (error) {
        console.log('Unable to connect to database')
    }

    console.log('Connect ok')

    const db = client.db(databaseName)

/*    db.collection('users').updateOne({
        _id: new ObjectID('5ead4d414e4143021aa541c8')
    }, {
        $inc: {
            age: 1
        }
    }).then( (result) => {
        console.log(result)
    }).catch( (error) => {
        console.log(error)
    })*/

    

})
