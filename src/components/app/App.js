import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import AppHeader from '../appHeader/AppHeader';
import { MainPage, ComicsPage, Page404, SingleComicPage } from '../pages';

import './app.scss';

export default function App() {
	return (
		<Router>
			<div className="app">
				<AppHeader />
				<main>
					<Routes>
						<Route path="/react-marvel-api" element={<Navigate to="/" />}/>
						<Route path="/" element={<MainPage/>} />
						<Route path="/comics" element={<ComicsPage/>} />
						<Route path="/comics/:comicId" element={<SingleComicPage/>} />
						<Route path="*" element={<Page404 />} />
					</Routes>
				</main>
			</div>
		</Router>
	);
}
