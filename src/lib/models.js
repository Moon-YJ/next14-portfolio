const mongoose = require('mongoose');
const schema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	img: {
		type: String
	}
});

export const Post = mongoose.model.Post || mongoose.model('Post', schema);
