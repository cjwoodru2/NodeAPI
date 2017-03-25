const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect('mongodb://test:password@ds135800.mlab.com:35800/nodeapi', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB');
    }
    
    console.log('Connected to be mLab DB Server');
       
    // db.collection('Todos').findOneAndUpdate(
    // { text: 'Eat lunch' },
    // { 
        
    //     $set: {
    //         completed: true 
    //     }
        
    // }, {
    //     returnOriginal: false
    // }).then((res) => {
    //     console.log(res);
    // })
    
    // db.collection('Users').findOneAndUpdate(
    // {
    //     name: 'Randy'
    // },
    // { 
    //     $set: {
    //         location: 'Mobile'
    //     },
    //     $inc: {
    //         age: 7
    //     }
        
    // }, {
    //     returnOriginal: false
    // }).then((res) => {
    //     console.log(res);
    // })
        
    // db.close();
})