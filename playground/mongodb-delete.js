const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect('mongodb://test:password@ds135800.mlab.com:35800/nodeapi', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB');
    }
    
    console.log('Connected to be mLab DB Server');
        
    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });
    
    // deleteOne - deletes the first that matches the criteria
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });
    
    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
    //     console.log(res);
    // });
    
    // db.collection('Users').deleteMany({name: 'Randy'}).then((res) => {
    //     console.log(res);
    // });
    
    // db.collection('Users').findOneAndDelete({
    //     _id: new ObjectID('58d684c1cb18b60c2b6dfcd3')
    // }).then((res) => {
    //     var { _id } = res.value;
    //     console.log(`you have deleted the todo with id: ${ _id }`);
    // });
    
    // db.close();
})