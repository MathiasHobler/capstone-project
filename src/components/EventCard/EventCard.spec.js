import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import dummyEvent from '../../utils/data';

import EventCard from './EventCard';

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
