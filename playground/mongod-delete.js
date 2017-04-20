const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect to MongoDB Server');
	}
	console.log('Connected to MongoDB Server');
	//DELETE MANY
	// db.collection('Users').deleteMany({name: 'Bill'})
	// 	.then((res) => {
	// 		console.log(res);
	// 	});

	//ONLY DELETE FIRST ONE
	// db.collection('Users').deleteOne({name: 'bill'})
	// 	.then((res) => {
	// 		console.log(res);
	// 	});

	//FIND ONE AND DELETE
	// db.collection('Users').findOneAndDelete({name: 'bill'})
	// 	.then((res) => {
	// 		console.log(res);
	// 	});

	// db.collection('Users').deleteMany({name: 'bill'})
	// 	.then((res) => {
	// 		console.log(res);
	// 	});
	db.collection('Users').findOneAndDelete({_id: new ObjectID("58f8889d62419238e4e0052e")})
		.then((res) => {
			console.log(JSON.stringify(res, undefined, 2));
		});
	db.close()


});