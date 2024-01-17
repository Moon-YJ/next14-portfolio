import clsx from 'clsx';
import styles from './detail.module.scss';

async function fetchYoutubeById(id) {
	const api_key = process.env.NEXT_PUBLIC_YOUTUBE_API;
	const baseURL = `https://www.googleapis.com/youtube/v3/playlistItems?key=${api_key}&part=snippet&id=${id}`;
	const data = await fetch(baseURL);
	const json = await data.json();
	return json.items[0].snippet;
}

export default async function Detail({ params }) {
	const data = await fetchYoutubeById(params.id);

	return (
		<section className={clsx(styles.detail)}>
			<article>
				<div className='video'>
					<iframe title={data.title} src={`https://www.youtube.com/embed/${data?.resourceId.videoId}`}></iframe>
				</div>
				<h3>{data.title}</h3>
				<p>{data.description}</p>
			</article>
		</section>
	);
}
