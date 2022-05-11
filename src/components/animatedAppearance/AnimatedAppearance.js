import { CSSTransition } from "react-transition-group";

import './animatedAppearance.scss';

export default function AnimatedAppearance(props) {
	return <CSSTransition
		{...props} timeout={300}
		classNames="appearance">
		<>
			{props.children}
		</>
	</CSSTransition>
}