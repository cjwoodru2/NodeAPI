var express = require("express");
var bodyParser = require("body-parser")

var mongoose = require("./db/mongoose");
var { User } = require("./models/user")
var { ProjectItem } = require("./models/project")

var app = express();

app.use(bodyParser.json());

app.post('/projects', (req, res) => {
    var proj = new ProjectItem({
        projectName: req.body.name,
        projectDescription: req.body.desc,
        projectImage: req.body.img,
        projectLink: req.body.link
    });
    
    proj.save((proj) => {
       return res.send(proj)
    }, (e) => {
        res.send(e);
    })
})

app.listen(process.env.PORT, process.env.IP, () => {
    console.log('API Server is live!');
});

module.exports = { app };