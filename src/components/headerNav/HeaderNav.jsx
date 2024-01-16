'use client';
import clsx from 'clsx';
import styles from './headerNav.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCustomText } from '@/hooks/useText';

export default function HeaderNav({ pages }) {
	const pathName = usePathname();
	const customTxt = useCustomText('combined');

	return (
		<nav className={clsx(styles.headerNav)}>
			{pages.map(page => (
				<Link key={page} href={`/${page}`} className={clsx(pathName === `/${page}` ? styles.on : '')}>
					{customTxt(page)}
				</Link>
			))}
		</nav>
	);
}
