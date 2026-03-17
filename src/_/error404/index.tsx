import s from './styles.module.css';

function Error404() {
	return (
		<div className={s.wrap404}>
			<div className={s.innerWrap}>
				<h1 className={s.wrap404Headline}>Ошибка 404</h1>
				<h2 className={s.wrap404Text}>К сожалению, такой страницы нет</h2>
				<a href="/" className={s.wrap404Link}>
					На главную &#8594;
				</a>
			</div>
		</div>
	);
}

export default Error404;
