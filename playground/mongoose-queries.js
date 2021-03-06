const {
    ObjectId
} = require('mongodb');
const {
    mongoose
} = require('./../server/db/mongoose');
const {
    Todo
} = require('./../server/modules/todo');
const {
    User
} = require('./../server/modules/user');

var id = '5c059b6c79cfe922f4e412ed';

if (!ObjectId.isValid(id)) {
    console.log('ID not valid');
}
Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('Id not found');
    }
    console.log('Todo By Id', todo);
}).catch((e) => console.log(e));

User.findById(id).then((user) => {
    if (!user) {
        return console.log('Id not found');
    }
    console.log('User By Id', user);
}).catch((e) => console.log(e));