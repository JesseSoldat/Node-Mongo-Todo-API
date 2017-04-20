const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect to MongoDB Server');
	}
	console.log('Connected to MongoDB Server');

	// db.collection('Todos').find({completed: false}).toArray()
	// 	.then((docs) => {
	// 		console.log(JSON.stringify(docs, undefined, 2));
	// 		db.close();
	// 	}, (err) => {
	// 		console.log('Unable to fetch todos', err);
	// 		db.close();
	// });
	db.collection('Todos').find({
		_id: new ObjectID('58f82d32f6e01e2774eae4d7')
	}).toArray()
		.then((docs) => {
			console.log(JSON.stringify(docs, undefined, 2));
			
		}, (err) => {
			console.log('Unable to fetch todos', err);
			db.close();
	});

	db.collection('Users').find().count()
		.then((count) => {
			console.log(`Todos count ${count}`);
			
		}, (err) => {
			console.log('Unable to fetch todos', err);
			db.close();
	});

	db.collection('Users').find({name: 'Nate'}).toArray()
		.then((docs) => {
			console.log(JSON.stringify(docs, undefined, 2));
			db.close();
		}, (err) => {
			console.log('Unable to fetch todos', err);
			db.close();
	});



});