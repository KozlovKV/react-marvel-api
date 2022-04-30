import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AppHeader from '../appHeader/AppHeader';
import { MainPage, ComicsPage } from '../pages';

import './app.scss';

export default function App() {
	return (
		<Router>
			<div className="app">
				<AppHeader />
				<main>
					<Switch>
						<Route exact path="/">
							<MainPage/>
						</Route>
						<Route exact path="/comics">
							<ComicsPage/>
						</Route>
					</Switch>
				</main>
			</div>
		</Router>
	);
}
