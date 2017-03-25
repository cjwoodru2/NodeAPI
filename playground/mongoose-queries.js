const { ObjectID } = require("mongodb");
const { mongoose } = require("./../server/db/mongoose");
const { ProjectItem } = require("./../server/models/project");
const { User } = require("./../server/models/user");

var id = '58d6ee238fd03e252fe6eea4x';

// if(!ObjectID.isValid(id)) {
//     console.log('ID is not valid')
// }

// ProjectItem.find({
//     _id: id
// }).then((res)=> {
//     console.log("Projects ", res);
// });

// ProjectItem.findOne({
//         _id: id
// }).then((res)=> {
//     console.log("Single Project ", res);
// });

// ProjectItem.findById(id).then((res) => {
//  if(!res) {
//      return console.log('ID not found')
//  }
//     console.log("Todo by ID ", res)
// }).catch((e) => console.log(e));

var id = '58d6c697896c291e5c5df177';

User.findById(id).then((res) => {
    if(!res) {
      return console.log('ID not found');
    }
    
    console.log('We found that user: ', res);
}).catch((e) => console.log(e));