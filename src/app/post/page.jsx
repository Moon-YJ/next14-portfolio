import clsx from 'clsx';
import styles from './post.module.scss';

export default function Post() {
	return (
		<div className={clsx(styles.post)}>
			<h1>Post</h1>
		</div>
	);
}
