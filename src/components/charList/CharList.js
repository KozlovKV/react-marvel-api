import { useState, useEffect } from "react";

import useMarvelService, { _getCharactersMaxOffset, _getCharactersBaseOffset } from "../../services/MarvelService";

import { BaseFiniteStateWrapper } from './../../hocs/withFiniteState';

import './charList.scss';


export default function CharList(props) {
	const _loadMoreDelta = 9;

	const [characters, setCharacters] = useState([]),
		{ processState, setProcessState, getCharacters } = useMarvelService();

	const onCharactersLoaded = (newCharacters) => {
		setCharacters(characters => [...characters, ...newCharacters]);
	}

	const loadCharacters = () => {
		const offset = characters.length;
		getCharacters(offset, _loadMoreDelta)
			.then(onCharactersLoaded)
			.then(() => setProcessState('success'));
	}

	const getCharItems = () => {
		return characters.map((char, i) => {
			const { thumbnail, name, id } = char, { selectedCharId, onCharSelected } = props;
			const classes = `char__item ${selectedCharId === id ? 'char__item_selected' : ''}`;
			return (
				<li className={classes} tabIndex="0" role="treeitem"
					onFocus={() => onCharSelected(id)} key={i} data-id={id}>
					<img src={thumbnail.url} alt={name} style={thumbnail.style} />
					<div className="char__name">{name}</div>
				</li>
			)
		});
	}

	const canLoadMore = () => characters.length < _getCharactersMaxOffset - _getCharactersBaseOffset;
	const getLoadMoreButton = () => {
		const canLoadMoreAnswer = canLoadMore();
		return <button className="button button__main button__long"
			onClick={onLoadMore} disabled={!canLoadMoreAnswer || processState === 'loading'}
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

	return (
		<div className="char__list">
			<BaseFiniteStateWrapper state={processState}>
				<ul className="char__grid">
					{getCharItems()}
				</ul>
				{getLoadMoreButton()}
			</BaseFiniteStateWrapper>
		</div>
	);
}