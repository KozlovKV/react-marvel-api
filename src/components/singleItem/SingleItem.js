import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import useMarvelService from '../../services/MarvelService';

import withFiniteState from '../../hocs/withFiniteState';

import './singleItem.scss';

const SingleItemWithFiniteState = withFiniteState();

export default function SingleComic(props) {
	const { itemId, dataType } = props;
	const { processState, setProcessState, getComic, getCharacter } = useMarvelService();
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
		typeParams[dataType]
			.getData(itemId)
			.then(setData)
			.then(() => setProcessState('success'));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [itemId]);

	const BlockComponent = typeParams[dataType].DataBlock;
	return (
		<>
			<SingleItemWithFiniteState state={processState}>
				<BlockComponent {...data} />
			</SingleItemWithFiniteState>
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
		<div className="single-item__price">
			{price ? `${price}$` : 'Not available'}
		</div>
	</BaseSingleItemBlock>;
}

function CharBlock(props) {
	return <BaseSingleItemBlock backPath="/chars" title={props.name} {...props}>
		<Helmet>
			<meta name="description" content={`${props.name} character`} />
		</Helmet>
	</BaseSingleItemBlock>
}