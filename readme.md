Heroku------------------------------
package.json
  "scripts": {
    "start": "node server/server.js"
  },
  "engines": {
    "node": "7.7.3"
  }
sever.js
var port = process.env.PORT || 3000;

01. heroku create

02. heroku addons:create mongolab:sandbox

optional (shows MONGODB_URI)
heroku config

(mongoose file)
03. mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

04. git commit -am 'ready to deploy to heroku'

05. git push

06. git push heroku master

-------------------
heroku logs


















let newUser = new User({
	name: 'Jesse',
	email: 'jesse@hotmail.com'
});

newUser.save().then((res) => {
	console.log('New user saved', res);
}, (err) => {
	console.log('Could not save user', err);
});

let newTodo = new Todo({
	text: 'Take out the garbage'
});

newTodo.save().then((res) => {
	console.log('Saved todo', res);
}, (err) => {
	console.log('Unable to save todo');
});

let newTodo1 = new Todo({
	text: '  Learn React Native ',
	completed: false,
});

newTodo1.save().then((res) => {
	console.log('Saved todo', res);
}, (err) => {
	console.log('Unable to save todo',err);
});