import { Header } from '~/els/@header';
import s from './styles.module.css';

function MainLayout() {
	return (
		<div className={s.helloScreen}>
			<Header />
			<p>ПРОЕКТИРОВАНИЕ ПОСТАВКА МОНТАЖ ОБСЛУЖИВАНИЕ</p>
			<h1>Системы безопасности и связи</h1>
			<p>
				А ТАК ЖЕ <br /> ЭЛЕКТРОМОНТАЖ И СИСТЕМЫ ОПОВЕЩЕНИЯ
			</p>
			<a>Начнем сотрудничать?</a>
			<span></span>
		</div>
	);
}

export const element = <MainLayout />;
