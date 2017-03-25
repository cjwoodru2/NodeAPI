var mongoose = require("mongoose");

var ProjectItems = mongoose.model('Item', {
    projectName: {
        type: String,
        required: true
    },
    projectDescription: {
        type: String,
        required: true
    },
    projectImage: {
        type: String,
        required: true
    },
    projectLink: {
        type: String,
        required: true,
        default: 'http://www.woodruffclt.com'
    }
});

module.exports  = { ProjectItems };