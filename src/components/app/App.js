import { useState } from 'react';

import AppHeader from '../appHeader/AppHeader';
import RandomChar from '../randomChar/RandomChar';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

import './app.scss';

import bgDecoration from '../../resources/img/vision.png';
import ComicsList from '../comicsList/ComicsList';

export default function App(props) {
	const [selectedCharId, setSelectedCharId] = useState(0);

	const onCharSelected = (selectedCharId) => setSelectedCharId(selectedCharId);

	return (
		<div className="app">
			<AppHeader />
			<main>
				<ComicsList />
				{/* <ErrorBoundary>
					<RandomChar />
				</ErrorBoundary>
				<div className="char__content">
					<ErrorBoundary>
						<CharList selectedCharId={selectedCharId} onCharSelected={onCharSelected} />
					</ErrorBoundary>
					<ErrorBoundary>
						<CharInfo selectedCharId={selectedCharId} />
					</ErrorBoundary>
				</div>
				<img className="bg-decoration" src={bgDecoration} alt="vision" /> */}
			</main>
		</div>
	);
}
