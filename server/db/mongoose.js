var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://mhd:6218549B@ds127094.mlab.com:27094/todoapp', {
    useCreateIndex: true,
    useNewUrlParser: true
});
module.exports = {
    mongoose
};