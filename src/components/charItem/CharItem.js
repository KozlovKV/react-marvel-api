import { Component } from "react";

import './charItem.scss';

export default class CharItem extends Component {
	state = {
		active: false,
	}

	onToggleSelected = () => {
		this.setState(({active}) => ({active: !active}));
	} 

	render() {
		const { thumbnail, name } = this.props;
		const { active } = this.state;
		let itemClass = `char__item ${active ? 'char__item_selected' : ''}`;
		return (
			<li className={itemClass} onClick={this.onToggleSelected}>
				<img src={thumbnail.url} alt={name} style={thumbnail.style} />
				<div className="char__name">{name}</div>
			</li>
		)
	}
}