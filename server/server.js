var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://test:password@ds135800.mlab.com:35800/nodeapi');

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

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

var newUser = new User({
    email: 'cjwoodru2@gmail.com'
});

newUser.save().then((res) => {
   return console.log(res);
}, (e) => {
    console.log(e);
});


// var newItems = new ProjectItems({
//     projectName: "Peer Analysis",
//     projectDescription: "Peer Analysis is a community where beginner developers can share their projects, courses and opinions. It will be a course rating and project feedback app that allows a user to login with their GitHub account and socially engage with peers at similar skill levels. Peer Analysis is a personal project that I started in February. It's a Node app build with Express, Mongo and EJS pages. I am working on using Passport for Authentication.",
//     projectImage: "http://woodruffclt.com/img/peeranalysis.png",
//     projectLink: "https://peeranalysis.herokuapp.com/"
// });

// newItems.save().then((res) => {
//     console.log('saved item', res)
// }, (e) => {
//     console.log('unable to save item', e)
// });