import { useState, useCallback } from "react";

export default function useHttp() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const request = useCallback(async function(url, method='GET', body=null, 
					headers={'Content-Type': 'application/json'}) {
		setLoading(true);
		setError(false);
		const response = await fetch(url, {method, body, headers});
		if (!response.ok) {
			setLoading(false);
			setError(true);
			throw new Error(`Can't fetch url ${url}, error ${response.status}: ${response.statusText}`);
		}
		const responseBody = await response.json();
		setLoading(false);
		setError(false);
		return responseBody;
	}, []);

	return {loading, error, request};
}