var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mhd:6218549B@ds127094.mlab.com:27094/todoapp' ||
    'mongodb://localhost:27017/TodoApp');

module.exports = {
    mongoose
};