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

	async getCharacters(limit) {
		limit = limit <= 100 ? limit : 100;
		const result = await this.get('characters', { limit, offset: 210 })
		return result.data.results.map(this._getProcessedCharacter);
	}

	async getCharacter(id) {
		const result = await this.get(`characters/${id}`)
		return this._getProcessedCharacter(result.data.results[0]);
	}

	
	_maxDescriptionLength = 190;
	static _getShortedDescription(description) {

		if (!description) { return 'Description not found'; }
		if (description.length <= this._maxDescriptionLength) { return description; }

		let words = description.split(' '), charLen = 0, i = 0;
		while (charLen + words[i].length <= this._maxDescriptionLength) {
			charLen += words[i].length;
			i++;
		}
		return words.slice(0, i).join(' ') + '…';
	}

	_getProcessedCharacter(charObj) {
		const { id, name, description, thumbnail, urls } = charObj;
		let thumbnailUrl = thumbnail.path + '.' + thumbnail.extension,
			homepageUrl = urls[0].url,
			wikiUrl = urls[1].url,
			shortedDescription = MarvelService._getShortedDescription(description);
		return {
			id, name, description, thumbnailUrl, homepageUrl, wikiUrl, shortedDescription
		}
	}
}