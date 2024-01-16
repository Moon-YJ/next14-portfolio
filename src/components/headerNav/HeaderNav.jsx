'use client';
import clsx from 'clsx';
import styles from './headerNav.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function HeaderNav({ pages }) {
	const pathName = usePathname();

	return (
		<nav className={clsx(styles.headerNav)}>
			{pages.map(page => (
				<Link key={page} href={`/${page}`} className={clsx(pathName === `/${page}` ? styles.on : '')}>
					{page}
				</Link>
			))}
		</nav>
	);
}
