const mongoose = require('mongoose');
let isConnected = false;

export const connectDB = async () => {
	try {
		if (isConnected) return console.log('Already Connected');
		const db = await mongoose.connect(process.env.MONGO_URL);
		isConnected = db.connections[0].readyState;
	} catch (error) {
		console.log(error);
		throw new Error('Connection to the DB Failed');
	}
};
