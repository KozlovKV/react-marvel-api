import { useState } from 'react';
import Helmet from 'react-helmet';

import RandomChar from '../randomChar/RandomChar';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';
import CharFindForm from '../charFindForm/CharFindForm';

import ErrorBoundary from '../errorBoundary/ErrorBoundary';

import bgDecoration from '../../resources/img/vision.png';

export default function MainPage() {
	const [selectedCharId, setSelectedCharId] = useState(0);

	const onCharSelected = (selectedCharId) => setSelectedCharId(selectedCharId);

	return (
		<>
			<Helmet>
				<meta name="description" content="Marvel information portal powered by Marvel API" />
				<title>Marvel Universe</title>
			</Helmet>
			<ErrorBoundary>
				<RandomChar />
			</ErrorBoundary>
			<div className="char__content">
				<ErrorBoundary>
					<CharList selectedCharId={selectedCharId} onCharSelected={onCharSelected} />
				</ErrorBoundary>
				<div>
					<ErrorBoundary>
						<CharInfo selectedCharId={selectedCharId} />
					</ErrorBoundary>
					<ErrorBoundary>
						<CharFindForm />
					</ErrorBoundary>
				</div>
			</div>
			<img className="bg-decoration" src={bgDecoration} alt="vision" />
		</>
	);
}