const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect('mongodb://test:password@ds135800.mlab.com:35800/nodeapi', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB');
    }
    
    console.log('Connected to be mLab DB Server');
    
    // db.collection('Todos').find({
    //     _id: new ObjectID('58d684008b4dd70bf71ddb21')
    // }).toArray().then((docs) => {
    //     console.log('Todos:');
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //     console.log('unable to fetch docs', err)
    // })
    db.collection('Todos').find().count().then((count) => {
        console.log(`Todo count: ${count}` );
    }, (err) => {
        console.log('unable to fetch docs', err)
    })
    
    db.collection('Users').find({name: 'Chris'}).toArray().then((users) => {
        console.log('Users:');
        console.log(JSON.stringify(users, undefined, 2))
    }, (err) => {
        console.log('unable to find', err)
    })
    
    db.close();
})