const { ObjectID } = require("mongodb");

const { mongoose } = require("./../server/db/mongoose");
const { ProjectItem } = require("./../server/models/project");
const { User } = require("./../server/models/user");

// ProjectItem.remove({}).then((result) => {
//   console.log(result);
// });



// ProjectItem.findOneAndRemove
// ProjectItem.findByIdAndRemove

ProjectItem.findByIdAndRemove()