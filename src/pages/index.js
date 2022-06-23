import {Helmet} from 'react-helmet';


import Form from '../components/Form/Form';

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

			<h1>Home</h1>
			<Form />

			<EventCard event={dummyEvent} />

		</Layout>
	);
}
