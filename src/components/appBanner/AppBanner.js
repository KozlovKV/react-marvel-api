import { Component } from "react";

import './appBanner.scss';

import avengersImg from '../../resources/img/Avengers.png';
import avengersLogo from '../../resources/img/Avengers_logo.png';

export default class AppBanner extends Component {
	render() {
		return (
			<div className="app__banner">
				<img src={avengersImg} alt="Avengers" />
				<div className="app__banner-text">
					New comics every week!<br />
					Stay tuned!
				</div>
				<img src={avengersLogo} alt="Avengers logo" />
			</div>
		);
	}
}