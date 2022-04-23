import { Component } from 'react';

import AppHeader from '../appHeader/AppHeader';
import RandomChar from '../randomChar/RandomChar';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

import './app.scss';

import bgDecoration from '../../resources/img/vision.png';

class App extends Component {
	state = {
		selectedCharId: 0,
	}

	onCharSelected = (selectedCharId) => {
		this.setState({ selectedCharId });
	}

	render() {
		const { selectedCharId } = this.state;

		return (
			<div className="app">
				<AppHeader />
				<main>
					<ErrorBoundary>
						<RandomChar />
					</ErrorBoundary>
					<div className="char__content">
						<ErrorBoundary>
							<CharList onCharSelected={this.onCharSelected} />
						</ErrorBoundary>
						<ErrorBoundary>
							<CharInfo selectedCharId={selectedCharId} />
						</ErrorBoundary>
					</div>
					<img className="bg-decoration" src={bgDecoration} alt="vision" />
				</main>
			</div>
		);
	}
}

export default App;
