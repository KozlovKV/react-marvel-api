import { Component } from "react";

import CharItem from "../charItem/CharItem";
import Spinner from "../spinner/Spinner";
import MarvelService from "../../services/MarvelService";

import './charList.scss';

export default class CharList extends Component {
	_loadMoreDelta = 9;
	state = {
		loading: true,
		characters: []
	}

	marvelService = new MarvelService();

	componentDidMount() {
		this.loadCharacters(9);
	}

	onCharactersLoaded = (characters) => {
		this.setState({ characters, loading: false })
	}

	loadCharacters = (loadLimit) => {
		this.setState({ loading: true })
		this.marvelService.getCharacters(loadLimit)
			.then(this.onCharactersLoaded);
	}

	getCharItems() {
		const { characters } = this.state;
		return characters.map(char => <CharItem key={char.id} {...char} />);
	}

	getLoadMoreButton() {
		return <button className="button button__main button__long"
			onClick={this.onLoadMore}>
			<div className="inner">
				{this.canLoadMore() ? "load more" : "Max characters loaded"}
			</div>
		</button>
	}

	canLoadMore() { return this.state.characters.length < 100; }

	onLoadMore = () => {
		if (this.canLoadMore()) {
			this.loadCharacters(this.state.characters.length + this._loadMoreDelta);
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