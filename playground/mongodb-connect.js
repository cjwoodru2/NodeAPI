const { MongoClient, ObjectID } = require("mongodb");



MongoClient.connect('mongodb://test:password@ds135800.mlab.com:35800/nodeapi', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB');
    }
    
    console.log('Connected to be mLab DB Server');
    
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to write data', err);
    //     }
        
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })
    
    // db.collection('Users').insertOne({
    //     name: 'Chris',
    //     age: 27,
    //     location: 'Charlotte'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to write data', err);
    //     }
        
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })
    
    db.close();
})