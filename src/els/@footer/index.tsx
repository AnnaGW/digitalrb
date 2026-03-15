import { type ReactElement } from 'react';

import s from './styles.module.css';

export const Footer = (): ReactElement => {
	return (
		<footer className={s.footer}>
			<p className={s.footerDetails}>&copy; ООО «Цифровая республика»</p>
		</footer>
	);
};
