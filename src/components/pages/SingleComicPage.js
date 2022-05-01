import { useParams } from "react-router-dom";

import SingleComic from '../singleComic/SingleComic';

export default function Page404() {
	const parapms = useParams();

	return (
		<SingleComic comicId={parapms.comicId} />
	);
}