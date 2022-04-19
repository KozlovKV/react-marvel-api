import { Component } from "react";

import CharItem from "../charItem/CharItem";
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
		return characters.map(char => <CharItem key={char.id}
												{...this.props}
												{...char} />);
	}

	getLoadMoreButton() {
		const canLoadMore = this.canLoadMore();
		return <button className="button button__main button__long"
			onClick={this.onLoadMore} disabled={!canLoadMore}>
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