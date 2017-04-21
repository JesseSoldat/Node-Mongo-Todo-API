let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
process.env.MONGODB_URI = "mongodb://jesse:jesse@ds111771.mlab.com:11771/udemy-node"
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = { mongoose };