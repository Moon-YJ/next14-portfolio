import { connectDB } from './connectDB';
import { Post } from './models';

export const getPost = async () => {
	try {
		connectDB();
		let posts = null;
		if (id) posts = await Post.findeById(id);
		else posts = await Post.find();
		return posts;
	} catch (err) {
		console.log('err');
		throw new Error('Sorry, we could not fetch the data.');
	}
};
