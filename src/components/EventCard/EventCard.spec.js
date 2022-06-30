import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import dummyEvent from '../../utils/data';

import EventCard from './EventCard';

describe('Event Card Component', () => {
	// it('should render correctly props', () => {
	// 	const singleEvent = dummyEvent[0];
	// 	render(<EventCard event={singleEvent} />);
	// 	expect(screen.getByText(singleEvent.eventName)).toBeInTheDocument();
	// 	expect(screen.getByText(singleEvent.desc)).toBeInTheDocument();
	// 	expect(screen.getByText(singleEvent.date)).toBeInTheDocument();
	// });

	it('ImageTag must have src = https://www.meetandeat-berlin.de/img/logo.svg and alt = "EventPicture"', () => {
		const singleEvent = dummyEvent[0];
		render(<EventCard event={singleEvent} />);
		const img = screen.getByRole('img');
		expect(img).toHaveAttribute('src', singleEvent.pictures.eventPicture);
		expect(img).toHaveAttribute('alt', 'EventPicture');
	});

	it('Heading in Event Card should be level 2', () => {
		const singleEvent = dummyEvent[0];
		const {getByRole} = render(<EventCard event={singleEvent} />);
		expect(getByRole('heading', {level: 2})).toBeInTheDocument();
	});
});
