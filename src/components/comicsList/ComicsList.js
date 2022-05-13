import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import AnimatedAppearance from "../animatedAppearance/AnimatedAppearance";

import useMarvelService, { _getComicsMaxOffset, _getComicsBaseOffset } from "../../services/MarvelService";

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

	const spinner = loading ? <Spinner width="250px" /> : null;
	const errorMessage = error ? <ErrorMessage /> : null;
	const button = !loading ? getLoadMoreButton() : null;
	return (
		<div className="comics__list">
			<AnimatedAppearance in={!loading} unmountOnExit>
				<ul className="comics__grid">
					{getComicsItems()}
				</ul>
				{errorMessage}
				{button}
			</AnimatedAppearance>
			<AnimatedAppearance in={loading} mountOnEnter>
				{spinner}
			</AnimatedAppearance>
		</div>
	);
}