var express = require("express");
var bodyParser = require("body-parser");
var { ObjectID } = require("mongodb");

const mongoose = require("./db/mongoose");
const { User } = require("./models/user");
const { ProjectItem } = require("./../server/models/project");

var app = express();

app.use(bodyParser.json());

// *********************
// POST ROUTE - PROJECTS
app.post('/projects', (req, res) => {
    var proj = new ProjectItem({
        projectName: req.body.name,
        projectDescription: req.body.desc,
        projectImage: req.body.img,
        projectLink: req.body.link
    });
    
    proj.save((proj) => {
       res.send({proj});
    }, (e) => {
        res.send(e);
    });
});

// *********************
// GET ROUTE - PROJECTS
app.get('/projects', (req, res) => {
    ProjectItem.find().then((projects) => {
        res.send({projects});
    }, (e) => {
        res.send(e);
    });
});


// **************************
// GET ROUTE - PROJECTS BY ID
app.get('/projects/:id', (req, res) => {
    var id = req.params.id;
    
    // validate ID
    if(!ObjectID.isValid(id)) {
        // Stop exec and respond with 404 error with emply body
        console.log('That is not a valid ID');
        res.status(404).send();
    }
        
    // findByID to query DB for ID
    ProjectItem.findById(id).then((project) => {
        // Success case
        if (!project) {
            // if project - send it back
            return res.status(404).send();
        } 
        
        // if project - send it back
        res.send({ project } );
        // Error case
    }).catch((e) => {
        res.status(400).send();
    });
        
});

// *****************************
// DELETE ROUTE - PROJECTS BY ID
app.delete('/projects/:id', (req, res) => {
    var id = req.params.id;
    
    // validate ID
    if(!    ObjectID.isValid(id)) {
        // Stop exec and respond with 404 error with emply body
        console.log('That is not a valid ID');
        return res.status(404).send();
    }
        
    // findByID to query DB for ID
    ProjectItem.findByIdAndRemove(id).then((project) => {
        // Success case
        if (!project) {
            // if project - send it back
            return res.status(404).send();
        } 
        
        // if project - send it back
        console.log(" This project has been removed:", project);
        res.send({ project } );
        // Error case
    }).catch((e) => {
        res.status(400).send();
    });
        
});

app.listen(process.env.PORT, process.env.IP, () => {
    console.log('API Server is live!');
});

module.exports = { app };