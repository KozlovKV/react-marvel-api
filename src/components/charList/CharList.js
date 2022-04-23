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
			const { thumbnail, name, id } = char, { onCharSelected } = this.props;
			return (
				<li className="char__item" tabIndex="0" role="treeitem"
					onFocus={() => onCharSelected(id)} key={i} data-id={id}>
					<img src={thumbnail.url} alt={name} style={thumbnail.style} />
					<div className="char__name">{name}</div>
				</li>
			)
		});
	}

	getLoadMoreButton() {
		const canLoadMore = this.canLoadMore();
		return <button className="button button__main button__long"
			onClick={this.onLoadMore} disabled={!canLoadMore}
			tabIndex="0">
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
				<ul className="char__grid">
					{this.getCharItems()}
				</ul>
				{spinner}
				{button}
			</div>
		);
	}
}