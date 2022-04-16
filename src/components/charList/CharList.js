import { Component } from "react";

import CharItem from "../charItem/CharItem";

import './charList.scss';

export default class CharList extends Component {
	getCharItems() {
		let items = [];
		for (let i = 0; i < 9; ++i) {
			if (i === 2) { items.push(<CharItem key={i} active/>); }
			else { items.push(<CharItem key={i}/>); }
		}
		return items;
	}

	render() {
		return (
			<div className="char__list">
				<ul className="char__grid">
					{this.getCharItems()}
				</ul>
				<button className="button button__main button__long">
					<div className="inner">load more</div>
				</button>
			</div>
		);
	}
}