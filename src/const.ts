export enum InternalRoute {
	MainPage = '/',
	About = '/about',
}

export const getBase = (route: string): string => {
	if (import.meta.env.MODE === 'development') {
		return route;
	}
	// return `/predel2026${route}`;
	return route;
	// return `https://predelufa.ru${route}`;
};

export const AppRoute = {
	MainPage: getBase(InternalRoute.MainPage),
	About: getBase(InternalRoute.About),
} as const;

export enum Pages {
	MainPage = 'Главная',
	About = 'О нас',
}

export const BASE_URL = import.meta.env.BASE_URL;

// const getCurrentPath = () => {
// 	const pathName = window.location.pathname;
// 	return pathName.startsWith(BASE_URL)
// 		? pathName.slice(BASE_URL.length - 1) || '/'
// 		: pathName;
// };

export enum WeCanName {
	Consult = 'Проконсультировать',
	Project = 'Спроектировать',
	Install = 'Выполнить монтаж',
	Service = 'Провести обслуживание',
}
