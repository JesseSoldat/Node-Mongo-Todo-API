const { ObjectID } = require('mongodb');

const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

var id = '58f95e392f08b31208c2384d';

if(!ObjectID.isValid(id)) {
	return console.log('ID is not valid');
}
//-------------if not in database returns []
// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos: ', todos);
// });

//-------------if not in database returns null
// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo: ', todo);
// });


//-------------if not in database returns null
Todo.findById(id).then((todo) => {
	console.log(todo);
	if(!todo){
		//!null === true
		return console.log('ID not found');
	}
	console.log(('Todo by ID: ', todo));
}).catch(e => console.log(e));

User.findById('58f8aae71f8ab41328683772').then(user => {
	if(!user){ 
		return console.log('Unable to find user');
	}
	console.log(JSON.stringify(user, undefined, 2));
}, (e) => console.log(e));
