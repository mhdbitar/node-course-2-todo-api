const {
    ObjectID
} = require('mongodb');

const {
    mongoose
} = require('mongoose');
const {
    Todo
} = require('./../server/modules/todo');
const {
    User
} = require('./../server/modules/user');

// Todo.remove({}).then((result) => {
//     console.log("Something", result);
// }).catch((e) => {
//     console.log(e)
// });

Todo.deleteMany().then((result) => {
    console.log("Something", result);
});