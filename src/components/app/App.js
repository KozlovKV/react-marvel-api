import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import AppHeader from '../appHeader/AppHeader';
import Spinner from '../spinner/Spinner';

import './app.scss';

const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleItemPage = lazy(() => import('../pages/SingleItemPage'));
const Page404 = lazy(() => import('../pages/404'));

const routes = [
	{path: '/', element: <Navigate to="/chars" />},
	{path: '/react-marvel-api', element: <Navigate to="/chars" />},
	{path: '/chars', element: <MainPage />},
	{path: '/chars/:id', element: <SingleItemPage />},
	{path: '/comics', element: <ComicsPage />},
	{path: '/comics/:id', element: <SingleItemPage />},
	{path: '*', element: <Page404 />},
]

export default function App() {
	return (
		<Suspense fallback={<Spinner />}>
			<Router>
				<div className="app">
					<AppHeader />
					<main>
						<Routes>
							{routes.map(routeObj => <Route key={routeObj.path} {...routeObj} />)}
						</Routes>
					</main>
				</div>
			</Router>
		</Suspense>
	);
}
