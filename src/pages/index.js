import {Helmet} from 'react-helmet';

import EventCard from '../components/EventCard/EventCard';
import Layout from '../components/Layout';
import dummyEvent from '../utils/data';

export default function HomePage() {
	return (
		<Layout>
			<Helmet>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Helmet>
			<EventCard event={dummyEvent} />
		</Layout>
	);
}
