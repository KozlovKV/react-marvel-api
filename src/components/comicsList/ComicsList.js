import { useState, useEffect } from "react";

import Spinner from "../spinner/Spinner";
import useMarvelService, { _getCharactersMaxOffset, _getCharactersBaseOffset } from "../../services/MarvelService";

import './comicsList.scss';

export default function ComicsList(props) {
	const _loadMoreDelta = 8;

	const [comics, setComics] = useState([]),
		{ loading, error, getComics } = useMarvelService();

	const onComicsLoaded = (newComics) => {
		setComics(comics => [...comics, ...newComics]);
	}

	const loadComics = () => {
		const offset = comics.length;
		getComics(offset, _loadMoreDelta)
			.then(onComicsLoaded);
	}

	const getComicsItems = () => {
		return comics.map((comic, i) => {
			const { id, thumbnail, title, price } = comic;
			return (
				<li className="comics__item" key={id}>
					<a href="./">
						<img src={thumbnail.url} alt={title} className="comics__item-img" style={thumbnail.style} />
						<div className="comics__item-name">{title}</div>
						<div className="comics__item-price">{price}$</div>
					</a>
				</li>
			)
		});
	}

	const canLoadMore = () => comics.length < _getCharactersMaxOffset - _getCharactersBaseOffset;
	const getLoadMoreButton = () => {
		const canLoadMoreAnswer = canLoadMore();
		return <button className="button button__main button__long"
			onClick={onLoadMore} disabled={!canLoadMoreAnswer}
			tabIndex="0">
			<div className="inner">
				{canLoadMoreAnswer ? "load more" : "All characters loaded"}
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

	const spinner = loading ? <Spinner /> : null;
	const button = !loading ? getLoadMoreButton() : null;
	return (
		<div className="comics__list">
			<ul className="comics__grid">
				{getComicsItems()}
			</ul>
			{spinner}
			{button}
		</div>
	);
}