import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Spinner from '../spinner/Spinner';
import ErrorMessage from './../errorMessage/ErrorMessage';
import AnimatedAppearance from '../animatedAppearance/AnimatedAppearance';

import useMarvelService from '../../services/MarvelService';

import './singleComic.scss';

export default function SingleComic(props) {
	const { comicId } = props;
	const { loading, error, getComic } = useMarvelService();
	const [comic, setComic] = useState(null);

	useEffect(() => {
		getComic(comicId).then(setComic);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [comicId]);

	const spinner = loading ? <Spinner /> : null;
	const errorMessage = error ? <ErrorMessage /> : null;
	const comicBlock = !(loading || error) && comic ? getComicBlock(comic) : null;
	return (
		<>
			{spinner}
			<AnimatedAppearance in={!loading}>
				{errorMessage}
				{comicBlock}
			</AnimatedAppearance>
		</>
	);
}

function getComicBlock({ thumbnail, title, pageCount, description, language, price }) {
	return <div className="single-comic">
		<img src={thumbnail.url} alt={title}
			className="single-comic__img" style={thumbnail.style} />
		<div className="single-comic__info">
			<h2 className="single-comic__name">{title}</h2>
			<p className="single-comic__descr">
				{description}
			</p>
			<p className="single-comic__descr">{pageCount} pages</p>
			<p className="single-comic__descr">Language: {language}</p>
			<div className="single-comic__price">{price}$</div>
		</div>
		<Link to="/comics" className="single-comic__back">Back to all</Link>
	</div>;
}