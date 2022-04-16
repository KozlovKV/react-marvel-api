import AppHeader from '../appHeader/AppHeader';
import RandomChar from '../randomChar/RandomChar';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';

import './app.scss';

import bgDecoration from '../../resources/img/vision.png';


function App() {
	return (
		<div className="app">
			<AppHeader/>
			<main>
				<RandomChar/>
				<div className="char__content">
					<CharList/>
					<CharInfo/>
				</div>
				<img className="bg-decoration" src={bgDecoration} alt="vision" />
			</main>
		</div>
	);
}

export default App;
