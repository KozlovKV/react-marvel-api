import { useState, useEffect } from "react";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Skeleton from "../skeleton/Skeleton";

import MarvelService from "../../services/MarvelService";

import './charInfo.scss';


export default function CharInfo(props) {
	const marvelService = new MarvelService();

	const [char, setChar] = useState(null),
		[loading, setLoading] = useState(false),
		[error, setError] = useState(false);

	const onCharLoading = () => {
		setLoading(true);
		setError(false);
	}

	const onCharLoaded = (char) => {
		setChar(char);
		setLoading(false);
		setError(false);
	}

	const onError = () => {
		setLoading(false);
		setError(true);
	}

	const updateCharInfo = () => {
		const { selectedCharId } = props;
		if (selectedCharId) {
			onCharLoading();
			marvelService.getCharacter(selectedCharId)
				.then(onCharLoaded)
				.catch(onError);
		}
	}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(updateCharInfo, [props.selectedCharId]);

	const skeleton = char || loading || error ? null : <Skeleton />,
		spinner = loading ? <Spinner /> : null,
		errorMessage = error ? <ErrorMessage /> : null,
		charInfoBlock = !(loading || error || !char) ? <CharInfoBlock char={char} /> : null;

	return (
		<div className="char__info">
			{skeleton}
			{spinner}
			{errorMessage}
			{charInfoBlock}
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