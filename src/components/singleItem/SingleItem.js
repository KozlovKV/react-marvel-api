import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import AnimatedAppearance from '../animatedAppearance/AnimatedAppearance';

import useMarvelService from '../../services/MarvelService';

import './singleItem.scss';

export default function SingleComic(props) {
	const { itemId, type } = props;
	const { loading, error, getComic, getCharacter } = useMarvelService();
	const typeParams = {
		char: {
			getData: getCharacter,
			getBlock: getCharBlock,
		},
		comic: {
			getData: getComic,
			getBlock: getComicBlock,
		}
	}
	const [data, setData] = useState(null);

	useEffect(() => {
		typeParams[type].getData(itemId).then(setData);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [itemId]);

	const spinner = loading ? <Spinner /> : null;
	const errorMessage = error ? <ErrorMessage /> : null;
	const dataBlock = !(loading || error) && data ? typeParams[type].getBlock(data) : null;
	return (
		<>
			{spinner}
			<AnimatedAppearance in={!loading}>
				{errorMessage}
				{dataBlock}
			</AnimatedAppearance>
		</>
	);
}

function getComicBlock({ thumbnail, title, pageCount, description, language, price }) {
	return <div className="single-item">
		<img src={thumbnail.url} alt={title}
			className="single-item__img" style={thumbnail.style} />
		<div className="single-item__info">
			<h2 className="single-item__name">{title}</h2>
			<p className="single-item__descr">
				{description}
			</p>
			<p className="single-item__descr">{pageCount} pages</p>
			<p className="single-item__descr">Language: {language}</p>
			<div className="single-item__price">{price}$</div>
		</div>
		<Link to="/comics" className="single-item__back">Back to all</Link>
	</div>;
}

function getCharBlock({ thumbnail, title, description, }) {
	return <div className="single-item">
		<img src={thumbnail.url} alt={title}
			className="single-item__img" style={thumbnail.style} />
		<div className="single-item__info">
			<h2 className="single-item__name">{title}</h2>
			<p className="single-item__descr">
				{description}
			</p>
		</div>
		<Link to="/chars" className="single-item__back">Back to all</Link>
	</div>;
}