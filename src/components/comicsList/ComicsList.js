import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import useMarvelService, { _getComicsMaxOffset, _getComicsBaseOffset } from "../../services/MarvelService";

import { BaseFiniteStateWrapper } from "../../hocs/withFiniteState";

import './comicsList.scss';

export default function ComicsList(props) {
	const _loadMoreDelta = 8;

	const [comics, setComics] = useState([]),
		{ processState, setProcessState, getComics } = useMarvelService();

	const onComicsLoaded = (newComics) => {
		setComics(comics => [...comics, ...newComics]);
	}

	const loadComics = () => {
		const offset = comics.length;
		getComics(offset, _loadMoreDelta)
			.then(onComicsLoaded)
			.then(() => setProcessState('success'));
	}

	const getComicsItems = () => {
		return comics.map((comic, i) => {
			const { id, thumbnail, title, price } = comic;
			return (
				<li className="comics__item" key={id}>
					<Link to={`/comics/${id}`}>
						<img src={thumbnail.url} alt={title} className="comics__item-img" style={thumbnail.style} />
						<div className="comics__item-name">{title}</div>
						<div className="comics__item-price">{price}$</div>
					</Link>
				</li>
			)
		});
	}

	const canLoadMore = () => comics.length < _getComicsMaxOffset - _getComicsBaseOffset;
	const getLoadMoreButton = () => {
		const canLoadMoreAnswer = canLoadMore();
		return <button className="button button__main button__long"
			onClick={onLoadMore} disabled={!canLoadMoreAnswer}
			tabIndex="0">
			<div className="inner">
				{canLoadMoreAnswer ? "load more" : "All comics loaded"}
			</div>
		</button>
	}

	const onLoadMore = () => {
		if (canLoadMore()) {
			loadComics();
		}
	}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(loadComics, []);

	return (
		<div className="comics__list">
			<BaseFiniteStateWrapper state={processState}>
				<ul className="comics__grid">
					{getComicsItems()}
				</ul>
			</BaseFiniteStateWrapper>
			{getLoadMoreButton()}
		</div>
	);
}