import useHttp from "../hooks/http.hook";

export default function useMarvelService() {
	const _apiBase = 'https://gateway.marvel.com:443/v1/public';
	const _apiKey = 'apikey=d840bc106aeea955689856e89bb25220';
	const {loading, error, request} = useHttp();

	async function get(urlPrefix, getParametersObject) {
		let getParametersList = [_apiKey];
		for (let key in getParametersObject) {
			getParametersList.push(`${key}=${getParametersObject[key]}`);
		}
		let requestUrl = `${_apiBase}/${urlPrefix}?${getParametersList.join('&')}`;
		return request(requestUrl);
	}

	async function getCharacters(offsetDelta, limit = 9) {
		limit = limit <= _getCharactersMaxLimit ? limit : _getCharactersMaxLimit;
		let offset = _getCharactersBaseOffset + offsetDelta;
		offset = offset <= _getCharactersMaxOffset ? offset : _getCharactersMaxOffset;
		const result = await get('characters', { limit, offset })
		return result.data.results.map(_getProcessedCharacter);
	}

	async function getCharacter(id) {
		const result = await get(`characters/${id}`)
		return _getProcessedCharacter(result.data.results[0]);
	}

	function _getProcessedCharacter(charObj) {
		const { id, name, urls, comics } = charObj;
		let thumbnail = _getThumbnailObj(charObj.thumbnail),
			homepageUrl = urls[0].url,
			wikiUrl = urls[1].url,
			description = !charObj.description ? 'Description not found' : charObj.description,
			shortedDescription = _getShortedDescription(description);
		return {
			id, name, description, thumbnail, homepageUrl, wikiUrl, shortedDescription, comics: comics.items
		}
	}

	async function getComics(offsetDelta, limit = 8) {
		limit = limit <= _getComicsMaxLimit ? limit : _getComicsMaxLimit;
		let offset = _getComicsBaseOffset + offsetDelta;
		offset = offset <= _getComicsMaxOffset ? offset : _getComicsMaxOffset;
		const result = await get('comics', { limit, offset })
		return result.data.results.map(_getProcessedComic);
	}

	async function getComic(comicId) {
		const result = await get(`comics/${comicId}`);
		return _getProcessedComic(result.data.results[0]);
	}

	function _getProcessedComic(comicObj) {
		const { id, title, pageCount } = comicObj;
		let thumbnail = _getThumbnailObj(comicObj.thumbnail),
			price = comicObj.prices[0].price,
			description = !comicObj.description ? 'Description not found' : comicObj.description,
			shortedDescription = _getShortedDescription(description),
			language= comicObj.textObjects.language || 'en-us';
		return {
			id, title, pageCount, price, description, thumbnail, shortedDescription, language,
		}
	}

	return {loading, error, getCharacter, getCharacters, getComic, getComics};
}

const _getCharactersMaxLimit = 100;
export const _getCharactersBaseOffset = 210;
export const _getCharactersMaxOffset = 1561;

const _getComicsMaxLimit = 100;
export const _getComicsBaseOffset = 0;
export const _getComicsMaxOffset = 1561;

const _maxShortedDescriptionLength = 190;
function _getShortedDescription(description) {
	if (description.length <= _maxShortedDescriptionLength) {
		return description;
	}

	let words = description.split(' '), charLen = 0, i = 0;
	words.forEach((word, index) => {
		if (
			charLen + word.length <= _maxShortedDescriptionLength &&
			index - i <= 1
		) {
			charLen += word.length;
			i = index;
		}
	})
	return words.slice(0, i).join(' ') + '…';
}

const _imgNotAvailableUrlParts = ['4c002e0305708', 'image_not_available']
function _getThumbnailObj(thumbnail) {
	let thumbnailObj = {
		url: thumbnail.path + '.' + thumbnail.extension,
		style: {}
	}
	if (_imgNotAvailableUrlParts.some(
		urlPart => thumbnail.path.indexOf(urlPart) > -1
	)) {
		thumbnailObj.style.objectFit = 'contain';
	}
	return thumbnailObj;
}