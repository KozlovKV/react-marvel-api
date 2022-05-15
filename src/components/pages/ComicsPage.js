import Helmet from 'react-helmet';

import ComicsList from '../comicsList/ComicsList';
import AppBanner from '../appBanner/AppBanner';

export default function ComicsPage() {
	return (
		<>
			<Helmet>
				<meta name="description" content="All Marvel's comics" />
				<title>Comics list</title>
			</Helmet>
			<AppBanner />
			<ComicsList />
		</>
	);
}