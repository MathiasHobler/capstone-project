import {render} from '@testing-library/react';

import dummyEvent from '../../utils/data';

import EventCardList from './EventCardList';

describe('EventCardList', () => {
	it('should render list of dummyEvent.length Events', () => {
		render(<EventCardList eventList={dummyEvent} />);
		const numberEvents = dummyEvent.length;
		expect(numberEvents).toBe(numberEvents);
	});
});
