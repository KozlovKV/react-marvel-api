import { Component } from "react";
import MarvelService from './../../services/MarvelService';

import './randomChar.scss';

import mjolnirImg from '../../resources/img/mjolnir.png';

export default class RandomChar extends Component {
	state = {
		char: {}
	}

	marvelService = new MarvelService();

	updateChar = () => {
		let randomId = 1009262;
		this.marvelService.getCharacter(randomId)
			.then(char => this.setState({char}));
	}

	componentDidMount() {
		this.updateChar();
	}

	_maxDescriptionLength = 180;
	getShortedDescription() {
		const { description } = this.state.char;

		if (!description) { return <strong>Description not found</strong>; }
		if (description.length <= this._maxDescriptionLength) { return description; }
		
		let words = description.split(' '), charLen = 0, i = 0;
		while (charLen + words[i].length <= this._maxDescriptionLength) {
			charLen += words[i].length;
			i++;
		}
		return words.slice(0, i).join(' ') + '…';
	}

	render() {
		const { thumbnailUrl, name, homepageUrl, wikiUrl } = this.state.char;
		console.log(this.state.char);
		return (
			<div className="randomchar">
				<div className="randomchar__block">
					<img src={thumbnailUrl} alt={name} className="randomchar__img" />
					<div className="randomchar__info">
						<p className="randomchar__name">{name}</p>
						<p className="randomchar__descr">
							{this.getShortedDescription()}	
						</p>
						<div className="randomchar__btns">
							<a href={homepageUrl} className="button button__main">
								<div className="inner">homepage</div>
							</a>
							<a href={wikiUrl} className="button button__secondary">
								<div className="inner">Wiki</div>
							</a>
						</div>
					</div>
				</div>
				<div className="randomchar__static">
					<p className="randomchar__title">
						Random character for today!<br />
						Do you want to get to know him better?
					</p>
					<p className="randomchar__title">
						Or choose another one
					</p>
					<button className="button button__main" onClick={this.updateChar}>
						<div className="inner">try it</div>
					</button>
					<img src={mjolnirImg} alt="mjolnir" className="randomchar__decoration" />
				</div>
			</div>
		);
	}
}