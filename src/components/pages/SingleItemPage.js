import { useParams, useLocation } from "react-router-dom";

import SingleItem from '../singleItem/SingleItem';
import AppBanner from "../appBanner/AppBanner";

export default function SingleItemPage() {
	const parapms = useParams();
	const type = useLocation().pathname.match('char') ? 'char' : 'comic';

	return ( <>
		<AppBanner />
		<SingleItem itemId={parapms.id} dataType={type} />
	</>
	);
}