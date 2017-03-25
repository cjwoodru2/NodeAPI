var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://test:password@ds135800.mlab.com:35800/nodeapi');

module.exports = { mongoose };