require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');
const hbs = require('hbs');
const _ = require('lodash');


var { mongoose } = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');



var app = express();
var port = process.env.PORT;

app.set('view engine', 'hbs');


app.use(bodyParser.json());


app.get('/', (req, res) => {
	res.render('home.hbs');
});

app.use(express.static(__dirname + '/public'));


app.post('/todos', (req, res) => {
	var todo = new Todo({
		text: req.body.text
	});

	todo.save().then((doc) => {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	});
});

app.get('/todos', (req, res) => {
	Todo.find().then((todos) => {
		res.send({todos});
	}, (e) => {
		res.status(400).send(e);
	});
});

app.get('/todos/:id', (req, res) => {
	var id = req.params.id;

	if(!ObjectID.isValid(id)) {
		return res.status(404).send({error: 'The id must be valid'});
	}

	Todo.findById(id).then((todo) => {
		if(!todo) {
			return res.status(404).send({error:'Could not find that todo'});
		}
		res.send({todo});
	}).catch(e => {
		res.status(400).send({error: 'An error occured'});
	});

});

app.delete('/todos/:id', (req, res) => {
	var id = req.params.id;

	if(!ObjectID.isValid(id)) {
		return res.status(404).send({error: 'The id must be valid'})
	}

	Todo.findByIdAndRemove(id).then((todo) => {
		if(!todo) {
			return res.status(404).send({error:'Could not find that todo'})
		}

		res.send({todo});
	}).catch((e) => {
		res.status(400).send({error: 'An error occured'});
	});
});

app.patch('/todos/:id', (req, res) => {
	var id = req.params.id;
	var body = _.pick(req.body, ['text', 'completed']);

	if(!ObjectID.isValid(id)){
		return res.status(404).send({error: 'The id must be valid'});
	}
	if(_.isBoolean(body.completed) && body.completed){
		body.completedAt = new Date().getTime();
	} else {
		body.completed = false;
		body.completedAt = null;
	}

	Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
		if(!todo) {
			return res.status(404).send({error:'Could not find that todo'});
		}

		res.send({todo});
	}).catch((e) => {
		res.status(400).send({error: 'An error occured'})
	});
});

app.listen(port, () => {
	console.log(`Server started at port ${port}`);
});

module.exports = { app };





