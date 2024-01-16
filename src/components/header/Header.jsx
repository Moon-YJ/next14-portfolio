import clsx from 'clsx';
import styles from './header.module.scss';
import Link from 'next/link';
import HeaderNav from '../headerNav/HeaderNav';

export default function Header() {
	return (
		<header className={clsx(styles.header)}>
			<h1>
				<Link href='/'>LOGO</Link>
			</h1>
			<HeaderNav pages={['youtube', 'post']} />
		</header>
	);
}
