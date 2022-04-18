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

	static _getCharactersMaxLimit = 100;
	async getCharacters(limit) {
		limit = limit <= MarvelService._getCharactersMaxLimit ? limit : MarvelService._getCharactersMaxLimit;
		const result = await this.get('characters', { limit, offset: 210 })
		return result.data.results.map(this._getProcessedCharacter);
	}

	async getCharacter(id) {
		const result = await this.get(`characters/${id}`)
		return this._getProcessedCharacter(result.data.results[0]);
	}

	
	static _maxShortedDescriptionLength = 190;
	static _getShortedDescription(description) {
		if (description.length <= MarvelService._maxShortedDescriptionLength) { 
			return description; 
		}

		let words = description.split(' '), charLen = 0, i = 0;
		words.forEach((word, index) => {
			if (
				charLen + word.length <= MarvelService._maxShortedDescriptionLength && 
				index - i <= 1
			) {
				charLen += word.length;
				i = index;
			}
		})
		return words.slice(0, i).join(' ') + '…';
	}

	static _getThumbnailObj(thumbnail) {
		let thumbnailObj = {
			url: thumbnail.path + '.' + thumbnail.extension, 
			style: {}
		}
		if (thumbnail.path.indexOf('image_not_available') > -1) {
			thumbnailObj.style.objectFit = 'contain';
		}
		return thumbnailObj;
	}

	_getProcessedCharacter(charObj) {
		const { id, name, urls } = charObj;
		let thumbnail = MarvelService._getThumbnailObj(charObj.thumbnail),
			homepageUrl = urls[0].url,
			wikiUrl = urls[1].url,
			description = !charObj.description ? 'Description not found' : charObj.description,
			shortedDescription = MarvelService._getShortedDescription(description);
		return {
			id, name, description, thumbnail, homepageUrl, wikiUrl, shortedDescription
		}
	}
}