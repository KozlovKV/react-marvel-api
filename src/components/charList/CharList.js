import { Component } from "react";

import Spinner from "../spinner/Spinner";
import MarvelService from "../../services/MarvelService";

import './charList.scss';

export default class CharList extends Component {
	_loadMoreDelta = 9;
	state = {
		loading: true,
		characters: [],
	};

	marvelService = new MarvelService();

	componentDidMount() {
		this.loadCharacters();
	}

	onTABSelectChar = (e) => {
		if (e.code === 'Tab' && e.target) {
			this.props.onCharSelected(+e.target.dataset.id);
		}
	}

	onCharactersLoaded = (newCharacters) => {
		this.setState(({ characters }) => ({
			characters: [...characters, ...newCharacters],
			loading: false,
		}));
	}

	loadCharacters = () => {
		const offset = this.state.characters.length;
		this.setState({ loading: true, })
		this.marvelService.getCharacters(offset)
			.then(this.onCharactersLoaded);
	}

	getCharItems() {
		const { characters } = this.state;
		return characters.map((char, i) => {
			const { thumbnail, name, id } = char,
				{ selectedCharId, onCharSelected } = this.props,
				active = selectedCharId === id;
			let itemClass = `char__item ${active ? 'char__item_selected' : ''}`;
			return (
				<li className={itemClass} tabIndex={i + 1}
					onClick={() => onCharSelected(id)} key={i} data-id={id}>
					<img src={thumbnail.url} alt={name} style={thumbnail.style} />
					<div className="char__name">{name}</div>
				</li>
			)
		});
	}

	getLoadMoreButton() {
		const canLoadMore = this.canLoadMore(), btnIndex = this.state.characters.length;
		return <button className="button button__main button__long"
			onClick={this.onLoadMore} disabled={!canLoadMore}
			tabIndex={btnIndex}>
			<div className="inner">
				{canLoadMore ? "load more" : "All characters loaded"}
			</div>
		</button>
	}

	canLoadMore() { return this.state.characters.length < MarvelService._getCharactersMaxOffset - MarvelService._getCharactersBaseOffset; }

	onLoadMore = () => {
		if (this.canLoadMore()) {
			this.loadCharacters();
		}
	}

	render() {
		const { loading } = this.state;
		const spinner = loading ? <Spinner /> : null;
		const button = !loading ? this.getLoadMoreButton() : null;
		return (
			<div className="char__list">
				<ul className="char__grid" onKeyUp={this.onTABSelectChar}>
					{this.getCharItems()}
				</ul>
				{spinner}
				{button}
			</div>
		);
	}
}