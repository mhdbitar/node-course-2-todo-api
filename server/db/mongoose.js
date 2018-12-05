var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://<mhd>:<6218549B>@ds127094.mlab.com:27094/todoapp');

module.exports = {
    mongoose
};