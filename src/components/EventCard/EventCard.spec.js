import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import EventCard from './EventCard';

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

describe('Event Card Component', () => {
	it('should render correctly props', () => {
		render(<EventCard event={dummyEvent} />);
		expect(screen.getByText(dummyEvent.eventName)).toBeInTheDocument();
		expect(screen.getByText(dummyEvent.desc)).toBeInTheDocument();
		expect(screen.getByText(dummyEvent.date)).toBeInTheDocument();
	});

	it('ImageTag must have src = https://www.meetandeat-berlin.de/img/logo.svg and alt = "EventPicture"', () => {
		render(<EventCard event={dummyEvent} />);
		const img = screen.getByRole('img');
		expect(img).toHaveAttribute('src', dummyEvent.pictures.eventPicture);
		expect(img).toHaveAttribute('alt', 'EventPicture');
	});

	it('Heading in Event Card should be level 2', () => {
		const {getByRole} = render(<EventCard event={dummyEvent} />);
		expect(getByRole('heading', {level: 2})).toBeInTheDocument();
	});
});
