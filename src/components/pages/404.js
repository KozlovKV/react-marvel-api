import { Link } from "react-router-dom";
import ErrorMessage from "../errorMessage/ErrorMessage";

export default function Page404() {
	return (
		<>
			<h2>Page not found</h2>
			<ErrorMessage/>
			<h3 style={{color: '#9F0013'}}>
				<Link to="/">Go to main page</Link>
			</h3>
		</>
	);
}