import {Helmet} from 'react-helmet';

import EventCard from '../components/EventCard/EventCard';
import Layout from '../components/Layout';

export default function HomePage() {
	const dummyEvent = {
		pictures: {
			eventPicture: 'https://www.meetandeat-berlin.de/img/logo.svg',
			coverPicture: '',
		},
		adress: {
			street: '',
			city: '',
		},
		private: false,
		categories: [],
		_id: '62b185e11a4caaa125207cab',
		eventName: 'Event1',
		eventPicture: '',
		coverPicture: '',
		participates: [],
		desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
		date: 'THU 30. Jun',
		location: [],
	};
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
