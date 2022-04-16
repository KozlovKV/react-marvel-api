export default class MarvelService {
	_apiBase = 'https://gateway.marvel.com:443/v1/public';
	_apiKey = 'apikey=d840bc106aeea955689856e89bb25220';

	async get(urlPrefix, getParametersObject) {
		let getParametersList = [this._apiKey];
		for (let key in getParametersObject) { 
			getParametersList.push(`${key}=${getParametersObject[key]}`); 
		}
		let requestUrl = `${this._apiBase}/${urlPrefix}?${getParametersList.join('&')}`;
		let response = await fetch(requestUrl);
		if (!response.ok) {
			throw new Error(`${response.code}: ${response.message}`);
		}
		return await response.json();
	}

	getCharacters() {
		return this.get('characters', {limit: 9, offset: 210})
	}

	getCharacter(id) {
		return this.get(`characters/${id}`)
	}
}