var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');
// 'mongodb://mhd:6218549B@ds127094.mlab.com:27094/todoapp'
module.exports = {
    mongoose
};