import { Component } from "react";

import ErrorMessage from '../errorMessage/ErrorMessage';

export default class ErrorBoundary extends Component {
	state = {
		error: false,
	}

	componentDidCatch(error, errorInfo) {
		console.log(error, errorInfo);
		this.setState({ error: true });
	}

	render() {
		const { error } = this.state, { children } = this.props;
		return (
			<>
				{error ? <ErrorMessage /> : children}
			</>
		);
	}
}