'use client';
import clsx from 'clsx';
import styles from './headerNav.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCustomText } from '@/hooks/useText';
import { useState } from 'react';

export default function HeaderNav({ pages }) {
	const pathName = usePathname();
	const [Checked, setChecked] = useState(false);
	const customTxt = useCustomText('combined');
	const handleClick = () => {
		setChecked(!Checked);
	};

	return (
		<>
			<nav className={clsx(styles.headerNav)}>
				{pages.map(page => (
					<Link key={page} href={`/${page}`} className={clsx(pathName === `/${page}` ? styles.on : '')}>
						{customTxt(page)}
					</Link>
				))}
				<div className={clsx(`${styles.switch} ${Checked ? styles.checked : ''}`)} onClick={handleClick}>
					<div className={clsx(styles.ball)}></div>
				</div>
			</nav>
		</>
	);
}
