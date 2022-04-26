import { useState } from 'react';

import AppHeader from '../appHeader/AppHeader';
import RandomChar from '../randomChar/RandomChar';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

import './app.scss';

import bgDecoration from '../../resources/img/vision.png';

export default function App(props) {
	const [selectedCharId, setSelectedCharId] = useState(0);

	const onCharSelected = (selectedCharId) => setSelectedCharId(selectedCharId);

	return (
		<div className="app">
			<AppHeader />
			<main>
				<ErrorBoundary>
					<RandomChar />
				</ErrorBoundary>
				<div className="char__content">
					<ErrorBoundary>
						<CharList onCharSelected={onCharSelected} />
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
