import { Link, NavLink } from 'react-router-dom';

import './appHeader.scss';

export default function AppHeader(props) {
	return (
		<header className="app__header">
			<h1 className="app__title">
				<Link to="/">
					<span>Marvel </span>
					information portal
				</Link>
			</h1>
			<nav className="app__menu">
				<ul>
					<li><NavLink to="/chars">Characters</NavLink></li>
					/
					<li><NavLink to="/comics">Comics</NavLink></li>
				</ul>
			</nav>
		</header>
	)
}