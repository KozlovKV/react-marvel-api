import { useState, useEffect } from "react";

import Spinner from "../spinner/Spinner";
import MarvelService from "../../services/MarvelService";

import './charList.scss';

export default function CharList(props) {
	const _loadMoreDelta = 9,
		marvelService = new MarvelService();
	
	const [loading, setLoading] = useState(true),
		[characters, setCharacters] = useState([]);

	const onCharactersLoaded = (newCharacters) => {
		setCharacters(characters => [...characters, ...newCharacters]);
		setLoading(false);
	}

	const loadCharacters = () => {
		const offset = characters.length;
		setLoading(true);
		marvelService.getCharacters(offset, _loadMoreDelta)
			.then(onCharactersLoaded);
	}

	const getCharItems = () => {
		return characters.map((char, i) => {
			const { thumbnail, name, id } = char, { onCharSelected } = props;
			return (
				<li className="char__item" tabIndex="0" role="treeitem"
					onFocus={() => onCharSelected(id)} key={i} data-id={id}>
					<img src={thumbnail.url} alt={name} style={thumbnail.style} />
					<div className="char__name">{name}</div>
				</li>
			)
		});
	}

	const canLoadMore = () => characters.length < MarvelService._getCharactersMaxOffset - MarvelService._getCharactersBaseOffset;
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
			loadCharacters();
		}
	}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(loadCharacters, []);

	const spinner = loading ? <Spinner /> : null;
	const button = !loading ? getLoadMoreButton() : null;
	return (
		<div className="char__list">
			<ul className="char__grid">
				{getCharItems()}
			</ul>
			{spinner}
			{button}
		</div>
	);
}