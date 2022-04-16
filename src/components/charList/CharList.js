import { Component } from "react";

import CharItem from "../charItem/CharItem";
import MarvelService from "../../services/MarvelService";

import './charList.scss';

export default class CharList extends Component {
	_loadMoreDelta = 9;
	state = {
		characters: []
	}

	marvelService = new MarvelService();

	componentDidMount() {
		this.loadCharacters(9);
	}

	loadCharacters(loadLimit) {
		this.marvelService.getCharacters(loadLimit)
			.then(characters => this.setState({characters}));
	}

	getCharItems() {
		const { characters } = this.state;
		return characters.map(char => <CharItem key={char.id} {...char} />);
	}

	canLoadMore() { return this.state.characters.length < 100; }

	onLoadMore = async () => {
		if (this.canLoadMore()) {
			this.loadCharacters(this.state.characters.length + this._loadMoreDelta);
		}
	}

	render() {
		return (
			<div className="char__list">
				<ul className="char__grid">
					{this.getCharItems()}
				</ul>
				<button className="button button__main button__long" 
						onClick={this.onLoadMore}>
					<div className="inner">
						{this.canLoadMore() ? "load more" : "Max characters loaded"}
					</div>
				</button>
			</div>
		);
	}
}