import { Component } from "react";

import './charItem.scss';

import charItemImg from '../../resources/img/abyss.jpg';

export default class CharItem extends Component {
	render() {
		const { active } = this.props;
		let itemClass = `char__item ${active ? 'char__item_selected' : ''}`;
		return (
			<li className={itemClass}>
				<img src={charItemImg} alt="abyss" />
				<div className="char__name">Abyss</div>
			</li>
		)
	}
}