import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import EventCard from './EventCard';

describe('Event Card Component', () => {
	it('should render children', () => {
		const {getByRole} = render(<EventCard />);
		expect(getByRole('img')).toBeInTheDocument();
		expect(getByRole('article')).toBeInTheDocument();
	});

	it('Heading in Event Card should be level 2', () => {
		const {getByRole} = render(<EventCard />);
		expect(getByRole('heading', {level: 2})).toBeInTheDocument();
	});
});
