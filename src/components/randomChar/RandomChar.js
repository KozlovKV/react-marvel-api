import { Component } from "react";
import MarvelService from './../../services/MarvelService';
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

import './randomChar.scss';

import mjolnirImg from '../../resources/img/mjolnir.png';

export default class RandomChar extends Component {
	state = {
		char: {},
		loading: true,
		error: false,
	}

	marvelService = new MarvelService();

	onCharLoaded = (char) => {
		this.setState({ char, loading: false, error: false });
	}

	onError = () => {
		this.setState({loading: false, error: true});
	}

	updateChar = () => {
		let randomId = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
		this.setState({loading: true});
		this.marvelService.getCharacter(randomId)
			.then(this.onCharLoaded)
			.catch(this.onError);
	}

	componentDidMount() {
		this.updateChar();
	}

	render() {
		const { char, loading, error } = this.state;
		const spinner = loading ? <Spinner /> : null;
		const errorMessage = error ? <ErrorMessage /> : null;
		const randomCharBlock = !(loading || error) ? <RandomCharBlock char={char} /> : null;
		return (
			<div className="randomchar">
				{spinner}
				{errorMessage}
				{randomCharBlock}
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

function RandomCharBlock({ char }) {
	const { thumbnailUrl, name, homepageUrl, wikiUrl, shortedDescription } = char;
	return (
		<div className="randomchar__block">
			<img src={thumbnailUrl} alt={name} className="randomchar__img" />
			<div className="randomchar__info">
				<p className="randomchar__name">{name}</p>
				<p className="randomchar__descr">
					{shortedDescription}
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
	);
}