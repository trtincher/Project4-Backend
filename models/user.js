const mongoose = require('../db/connection');

const userSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	characters: [
		{
			ref: 'Character',
			type: mongoose.Schema.Types.ObjectId
		}
	]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
