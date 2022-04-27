import { useState, useEffect } from "react";
import useMarvelService from './../../services/MarvelService';
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

import './randomChar.scss';

import mjolnirImg from '../../resources/img/mjolnir.png';

export default function RandomChar() {

	const [char, setChar] = useState({}),
		{loading, error, getCharacter} = useMarvelService();

	const onCharLoaded = (char) => {
		setChar(char);
	}

	const updateChar = () => {
		let randomId = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
		getCharacter(randomId)
			.then(onCharLoaded);
	}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(updateChar, []);

	const spinner = loading ? <Spinner /> : null;
	const errorMessage = error ? <ErrorMessage /> : null;
	const randomCharBlock = !(loading || error) && char.id ? <RandomCharBlock char={char} /> : null;
	return (
		<div className="randomchar">
			{spinner}
			{errorMessage}
			{randomCharBlock}
			<div className="randomchar__static">
				<p className="randomchar__title">
					Random character for today!<br />
					Do you want to get to know him better?
				</p>
				<p className="randomchar__title">
					Or choose another one
				</p>
				<button className="button button__main" onClick={updateChar}>
					<div className="inner">try it</div>
				</button>
				<img src={mjolnirImg} alt="mjolnir" className="randomchar__decoration" />
			</div>
		</div>
	);
}

function RandomCharBlock({ char }) {
	const { thumbnail, name, homepageUrl, wikiUrl, shortedDescription } = char;

	return (
		<div className="randomchar__block">
			<img src={thumbnail.url} alt={name} className="randomchar__img" style={thumbnail.style} />
			<div className="randomchar__info">
				<p className="randomchar__name">{name}</p>
				<p className="randomchar__descr">
					{shortedDescription}
				</p>
				<div className="randomchar__btns">
					<a href={homepageUrl} className="button button__main">
						<div className="inner">homepage</div>
					</a>
					<a href={wikiUrl} className="button button__secondary">
						<div className="inner">Wiki</div>
					</a>
				</div>
			</div>
		</div>
	);
}