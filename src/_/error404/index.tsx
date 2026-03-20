import { AppRoute } from '~/const';
import s from './styles.module.css';

function Error404() {
	console.log('window.location.pathname - ', window.location.pathname);
	console.log('AppRoute.MainPage - ', AppRoute.MainPage);
	return (
		<div className={s.wrap404}>
			<div className={s.innerWrap}>
				<h1 className={s.wrap404Headline}>Ошибка 404</h1>
				<h2 className={s.wrap404Text}>К сожалению, такой страницы нет</h2>
				<a href={AppRoute.MainPage} className={s.wrap404Link}>
					На главную &#8594;
				</a>
			</div>
		</div>
	);
}

export default Error404;
