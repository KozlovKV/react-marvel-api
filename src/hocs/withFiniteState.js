import Spinner from "../components/spinner/Spinner";
import ErrorMessage from "../components/errorMessage/ErrorMessage";

export default function withFiniteState(modifiedActions) {
	const stateActions = {
		waiting: () => {},
		loading: () => <Spinner />,
		error: () => <ErrorMessage />,
		fetched: () => {},
		success: ({children}) => <>{children}</>,
		...modifiedActions
	}
	return ({state, ...props}) => {
		return stateActions[state](props);
	}
}

export const BaseFiniteStateWrapper = withFiniteState();