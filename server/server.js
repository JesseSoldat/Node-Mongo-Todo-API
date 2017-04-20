const express = require('express');
const bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
var port = 3000;
app.use(bodyParser.json());

app.listen(port, () => {
	console.log(`Server started at port ${port}`);

	module.exports = { app };
})
// let newUser = new User({
// 	name: 'Jesse',
// 	email: 'jesse@hotmail.com'
// });

// newUser.save().then((res) => {
// 	console.log('New user saved', res);
// }, (err) => {
// 	console.log('Could not save user', err);
// });

// let newTodo = new Todo({
// 	text: 'Take out the garbage'
// });

// newTodo.save().then((res) => {
// 	console.log('Saved todo', res);
// }, (err) => {
// 	console.log('Unable to save todo');
// });

// let newTodo1 = new Todo({
// 	text: '  Learn React Native ',
// 	completed: false,
// });

// newTodo1.save().then((res) => {
// 	console.log('Saved todo', res);
// }, (err) => {
// 	console.log('Unable to save todo',err);
// });

