import { type ReactElement } from 'react';

import s from './styles.module.css';

export const Header = (): ReactElement => {
	return (
		<header className={s.mainHeader}>
			<div className={s.mainHeaderBg}></div>
			<p className={s.headerOOO}>Общество с ограниченой ответственностью</p>
			<h2 className={s.headerName}>
				&lsaquo;&lsaquo;Цифровая Республика&rsaquo;&rsaquo;
			</h2>
			<p className={s.headerDetails}>инн 0274938543 кпп 027401001</p>
		</header>
	);
};
