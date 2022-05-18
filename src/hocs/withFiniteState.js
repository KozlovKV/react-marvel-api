import Spinner from "../components/spinner/Spinner";
import ErrorMessage from "../components/errorMessage/ErrorMessage";

import AnimatedAppearance from './../components/animatedAppearance/AnimatedAppearance';

export default function withFiniteState(modifiedActions) {
	const stateActions = {
		waiting: () => { },
		loading: () => <Spinner />,
		error: () => <ErrorMessage />,
		fetched: () => { },
		success: ({ children }) => <>{children}</>,
		...modifiedActions
	}
	return ({ state, ...props }) => {
		return <AnimatedAppearance in={state === 'success'}>
			{stateActions[state](props)}
		</AnimatedAppearance>
	}
}

export const BaseFiniteStateWrapper = withFiniteState();