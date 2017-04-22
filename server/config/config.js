var env = process.env.NODE_ENV || 'development';
//Heroku will set this to 'production'

if(env === 'development') {
	process.env.PORT = 3000;
	process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';

} else if (env === 'production') {
	process.env.MONGODB_URI = "mongodb://jesse:jesse@ds111771.mlab.com:11771/udemy-node";

} else if ( env === 'test') {
	process.env.PORT = 3001;
	process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
}