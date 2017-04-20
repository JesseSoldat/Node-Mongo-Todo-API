const {MongoClient, ObjectID } = require('mongodb');

var objID = new ObjectID();
// console.log(objID);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// let myUser = { name: 'Jesse', age: 36, location: 'Atlanta'};
	// let { name } = myUser;
	// console.log(name);

	// db.collection('Todos').insertOne({
	// 	text: 'My first todo',
	// 	completed: false
	// }, (err, result) => {
	// 	if(err){ 
	// 		return console.log('Unable to insert todo', err);
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	// db.collection('Users').insertOne({
	// 	name: 'Mark',
	// 	age: 70,
	// 	location: 'Des Moines'
	// }, (err, result) => {
	// 	if(err){
	// 		return console.log('Unable to insert user', err);
	// 	}
	// 	// console.log(JSON.stringify(result.ops, undefined, 2));
	// 	// console.log(result.ops[0]._id.getTimestamp());
	// });

	db.close();
});