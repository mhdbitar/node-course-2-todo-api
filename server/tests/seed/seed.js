const {
    ObjectId
} = require("mongodb");
const jwt = require('jsonwebtoken');

const {
    Todo
} = require("./../../modules/todo");
const {
    User
} = require('./../../modules/user');

const userOneId = new ObjectId();
const userTwoId = new ObjectId();
const users = [{
    _id: userOneId,
    email: 'eng.mhd.bitar@gmail.com',
    password: 'UserOnePass',
    tokens: [{
        access: 'auth',
        token: jwt.sign({
            _id: userOneId,
            access: 'auth'
        }, 'abc123', ).toString()
    }]
}, {
    _id: userTwoId,
    email: 'itebitar@gmail.com',
    password: 'UserTwoPass',
}]

const todos = [{
        _id: new ObjectId(),
        text: "First test todo"
    },
    {
        _id: new ObjectId(),
        text: "Second test todo",
        completed: true,
        completedAt: 333
    }
];

const populateTodos = (done) => {
    Todo.deleteMany({})
        .then(() => {
            return Todo.insertMany(todos);
        })
        .then(() => done());
};

const populateUsers = (done) => {
    User.deleteMany({}).then(() => {
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();

        return Promise.all([userOne, userTwo]);
    }).then(() => done());
};

module.exports = {
    todos,
    populateTodos,
    users,
    populateUsers
};