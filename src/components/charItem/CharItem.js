import { Component } from "react";

import './charItem.scss';

export default class CharItem extends Component {
	render() {
		const { active, thumbnailUrl, name } = this.props;
		let itemClass = `char__item ${active ? 'char__item_selected' : ''}`;
		return (
			<li className={itemClass}>
				<img src={thumbnailUrl} alt={name} />
				<div className="char__name">{name}</div>
			</li>
		)
	}
}