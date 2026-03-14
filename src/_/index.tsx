import { Header } from '~/els/@header';
import s from './styles.module.css';

function MainLayout() {
	return (
		<div>
			<Header />
			<section className={s.helloScreen}>
				<div className={s.aboutBg}></div>
				<div className={s.aboutScreen}>
					<p className={s.aboutService}>
						ПРОЕКТИРОВАНИЕ ПОСТАВКА МОНТАЖ ОБСЛУЖИВАНИЕ
					</p>
					<h1 className={s.aboutHeadline}>Системы безопасности и связи</h1>
					<p className={s.aboutElse}>
						А ТАК ЖЕ <br /> ЭЛЕКТРОМОНТАЖ И СИСТЕМЫ ОПОВЕЩЕНИЯ
					</p>
					<a className={s.aboutBegin}>Начнем сотрудничать?</a>
				</div>
			</section>
			<section className={s.weCan}>
				<h2 className={s.weCanHeadline}>Мы можем</h2>
			</section>
		</div>
	);
}

export const element = <MainLayout />;
