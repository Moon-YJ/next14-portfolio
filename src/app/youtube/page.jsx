import clsx from 'clsx';
import styles from './youtube.module.scss';
import { useCustomText } from '@/hooks/useText';
import Link from 'next/link';
import Image from 'next/image';

async function fetchYoutube() {
	const api_key = process.env.NEXT_PUBLIC_YOUTUBE_API;
	const pid = process.env.NEXT_PUBLIC_PId;
	const num = 7;
	const baseURL = `https://www.googleapis.com/youtube/v3/playlistItems?key=${api_key}&part=snippet&playlistId=${pid}&maxResults=${num}`;
	const data = await fetch(baseURL);
	const json = await data.json();
	return json;
}

export default async function Youtube() {
	const shortenText = useCustomText('shorten');
	const customText = useCustomText('combined');
	const data = await fetchYoutube();

	return (
		<section className={clsx(styles.youtube)}>
			<h1>Youtube</h1>
			{data.items.map((data, idx) => {
				const [date, time] = data.snippet.publishedAt.split('T');

				return (
					<article key={data.id + idx}>
						<h2>{shortenText(data.snippet.title, 50)}</h2>

						<div className={clsx(styles.txt)}>
							<p>{shortenText(data.snippet.description, 250)}</p>
							<div className={clsx(styles.infoBox)}>
								<span>{customText(date, '.')}</span>
								<em>{time.split('Z')[0]}</em>
							</div>
						</div>

						<div className={clsx(styles.pic)}>
							<Link href={`/youtube/${data.id}`}>
								<Image
									src={data.snippet.thumbnails.standard.url}
									alt={data.snippet.title}
									fill
									priority
									sizes='(max-width: 768px) 70vw, (max-width: 1200px) 50vw, 30vw'
								/>
							</Link>
						</div>
					</article>
				);
			})}
		</section>
	);
}
