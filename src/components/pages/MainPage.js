import { useState } from 'react';

import RandomChar from '../randomChar/RandomChar';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

import bgDecoration from '../../resources/img/vision.png';

export default function MainPage() {
	const [selectedCharId, setSelectedCharId] = useState(0);

	const onCharSelected = (selectedCharId) => setSelectedCharId(selectedCharId);

	return (
		<>
			<ErrorBoundary>
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
			<img className="bg-decoration" src={bgDecoration} alt="vision" />
		</>
	);
}