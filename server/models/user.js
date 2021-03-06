var mongoose = require('mongoose');

let User = mongoose.model('User', {
	name: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	email: {
		type: String,
		required: true,
		minlength: 4,
		trim: true
	}
});

module.exports = { User };