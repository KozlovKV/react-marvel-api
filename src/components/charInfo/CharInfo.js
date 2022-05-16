import { useState, useEffect } from "react";

import Skeleton from "../skeleton/Skeleton";

import useMarvelService from "../../services/MarvelService";

import withFiniteState from './../../hocs/withFiniteState';

import './charInfo.scss';

const CharInfoContentWithFiniteStateMachine = withFiniteState({
	waiting: () => <Skeleton />
});

export default function CharInfo(props) {

	const [char, setChar] = useState(null),
		{ processState, setProcessState, getCharacter } = useMarvelService();

	const onCharLoaded = (char) => {
		setChar(char);
	}

	const updateCharInfo = () => {
		const { selectedCharId } = props;
		if (selectedCharId) {
			getCharacter(selectedCharId)
				.then(onCharLoaded)
				.then(() => setProcessState('success'));
		}
	}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(updateCharInfo, [props.selectedCharId]);

	return (
		<div className="char__info">
			<CharInfoContentWithFiniteStateMachine state={processState}>
				<CharInfoBlock char={char} />
			</CharInfoContentWithFiniteStateMachine>
		</div>
	);
}

const CharInfoBlock = ({ char }) => {
	const { thumbnail, name, homepageUrl, wikiUrl, description, comics } = char;
	let comicsElements = comics.map(
		comic =>
			<li className="char__comics-item" key={comic.name}>
				{comic.name}
			</li>
	);
	return (
		<>
			<div className="char__basics">
				<img src={thumbnail.url} alt={name} style={thumbnail.style} />
				<div>
					<div className="char__info-name">{name}</div>
					<div className="char__btns">
						<a href={homepageUrl} className="button button__main">
							<div className="inner">homepage</div>
						</a>
						<a href={wikiUrl} className="button button__secondary">
							<div className="inner">Wiki</div>
						</a>
					</div>
				</div>
			</div>
			<div className="char__descr">
				{description}
			</div>
			<div className="char__comics">Comics:</div>
			<ul className="char__comics-list">
				{comicsElements.length > 0 ? comicsElements.slice(0, 10) : 'No comics with this character'}
			</ul>
		</>
	)
}