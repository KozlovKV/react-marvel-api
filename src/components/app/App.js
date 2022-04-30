import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AppHeader from '../appHeader/AppHeader';
import { MainPage, ComicsPage } from '../pages';

import './app.scss';

export default function App() {
	return (
		<Router>
			<div className="app">
				<AppHeader />
				<main>
					<Routes>
						<Route path="/" element={<MainPage/>} />
						<Route path="/comics" element={<ComicsPage/>} />
					</Routes>
				</main>
			</div>
		</Router>
	);
}
