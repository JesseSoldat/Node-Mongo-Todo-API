const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect to MongoDB Server');
	}
	console.log('Connected to MongoDB Server');

	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('58f82d32f6e01e2774eae4d7')
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 		returnOriginal: false
	// 	}).then((res) => {
	// 		console.log(res);
	// 	});

	db.collection('Users').findOneAndUpdate({
		name: 'Ted'
	}, {
		$set: {
			name: 'Joe'
		},
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	}).then((res) => {
		console.log(res);
	});

	db.close()




});