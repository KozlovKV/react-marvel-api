import { Component } from "react";

import './charItem.scss';

export default class CharItem extends Component {
	render() {
		const { thumbnail, name, selectedCharId, id, onCharSelected } = this.props;
		const active = selectedCharId === id;
		let itemClass = `char__item ${active ? 'char__item_selected' : ''}`;
		return (
			<li className={itemClass} onClick={() => onCharSelected(id)}>
				<img src={thumbnail.url} alt={name} style={thumbnail.style} />
				<div className="char__name">{name}</div>
			</li>
		)
	}
}