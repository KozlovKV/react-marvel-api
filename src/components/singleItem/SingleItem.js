import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import AnimatedAppearance from '../animatedAppearance/AnimatedAppearance';

import useMarvelService from '../../services/MarvelService';

import './singleItem.scss';

export default function SingleComic(props) {
	const { itemId, dataType } = props;
	const { loading, error, getComic, getCharacter } = useMarvelService();
	const typeParams = {
		char: {
			getData: getCharacter,
			DataBlock: CharBlock,
		},
		comic: {
			getData: getComic,
			DataBlock: ComicBlock,
		}
	}
	const [data, setData] = useState(null);

	useEffect(() => {
		typeParams[dataType].getData(itemId).then(setData);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [itemId]);

	const spinner = loading ? <Spinner /> : null;
	const errorMessage = error ? <ErrorMessage /> : null;
	const BlockComponent = typeParams[dataType].DataBlock;
	const dataBlock = !(loading || error) && data ? <BlockComponent {...data} /> : null;
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

function BaseSingleItemBlock(props) {
	const { thumbnail, title, description, children, backPath } = props;
	return <div className="single-item">
		<Helmet>
			<meta name="description" content="All Marvel's comics" />
			<title>{title}</title>
		</Helmet>
		<img src={thumbnail.url} alt={title}
			className="single-item__img" style={thumbnail.style} />
		<div className="single-item__info">
			<h2 className="single-item__name">{title}</h2>
			<p className="single-item__descr">
				{description}
			</p>
			{children}
		</div>
		<Link to={backPath} className="single-item__back">Back to all</Link>
	</div>;
}

function ComicBlock({ pageCount, language, price, ...props }) {
	return <BaseSingleItemBlock backPath="/comics" {...props}>
		<Helmet>
			<meta name="description" content={`${props.title} comic`} />
		</Helmet>
		<p className="single-item__descr">{pageCount} pages</p>
		<p className="single-item__descr">Language: {language}</p>
		<div className="single-item__price">{price}$</div>
	</BaseSingleItemBlock>;
}

function CharBlock(props) {
	return <BaseSingleItemBlock backPath="/chars" title={props.name} {...props}>
		<Helmet>
			<meta name="description" content={`${props.name} character`} />
		</Helmet>
	</BaseSingleItemBlock>
}