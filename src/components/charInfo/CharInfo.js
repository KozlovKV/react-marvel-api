import { Component } from "react";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Skeleton from "../skeleton/Skeleton";

import MarvelService from "../../services/MarvelService";

import './charInfo.scss';


export default class CharInfo extends Component {
	marvelService = new MarvelService();

	state = {
		char: null,
		loading: false,
		error: false,
	}

	onCharLoading = () => {
		this.setState({ loading: true, error: false });
	}

	onCharLoaded = (char) => {
		this.setState({ char, loading: false, error: false });
	}

	onError = () => {
		this.setState({ loading: false, error: true });
	}

	updateCharInfo = () => {
		const { selectedCharId } = this.props;
		if (selectedCharId) {
			this.onCharLoading();
			this.marvelService.getCharacter(selectedCharId)
				.then(this.onCharLoaded)
				.catch(this.onError);
		}
	}

	componentDidMount() {
		this.updateCharInfo();
	}

	componentDidUpdate(prevProps) {
		if (this.props.selectedCharId !== prevProps.selectedCharId) {
			this.updateCharInfo();
		}
	}

	render() {
		const { char, loading, error } = this.state,
			skeleton = char || loading || error ? null : <Skeleton />,
			spinner = loading ? <Spinner /> : null,
			errorMessage = error ? <ErrorMessage /> : null,
			charInfoBlock = !(loading || error || !char) ? <CharInfoBlock char={char} /> : null;

		return (
			<div className="char__info">
				{skeleton}
				{spinner}
				{errorMessage}
				{charInfoBlock}
			</div>
		)
	}
}

const CharInfoBlock = ({ char }) => {
	const { thumbnail, name, homepageUrl, wikiUrl, description, comics } = char;
	let comicsElements = comics.map(
		comic =>
			<li className="char__comics-item" key={comic.name}>
				{comic.name}
			</li>
	);
	return (
		<>
			<div className="char__basics">
				<img src={thumbnail.url} alt={name} style={thumbnail.style} />
				<div>
					<div className="char__info-name">{name}</div>
					<div className="char__btns">
						<a href={homepageUrl} className="button button__main">
							<div className="inner">homepage</div>
						</a>
						<a href={wikiUrl} className="button button__secondary">
							<div className="inner">Wiki</div>
						</a>
					</div>
				</div>
			</div>
			<div className="char__descr">
				{description}
			</div>
			<div className="char__comics">Comics:</div>
			<ul className="char__comics-list">
				{comicsElements.length > 0 ? comicsElements.slice(0, 10) : 'No comics with this character'}
			</ul>
		</>
	)
}