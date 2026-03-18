import { useMemo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Error404 from './_/error404';
import { AppRoute } from './const';

const routes = [
	{
		path: AppRoute.MainPage,
		errorElement: <Error404 />,
		lazy: () => import('./_'),
	},
];

function Routing() {
	const router = useMemo(() => createBrowserRouter(routes), []);
	return <RouterProvider router={router} />;
}

export default Routing;
