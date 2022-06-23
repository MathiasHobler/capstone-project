import {render, screen, within} from '@testing-library/react';

import dummyEvent from '../../utils/data';

import EventCardList from './EventCardList';

describe('EventCardList', () => {
	it('should render list of dummyEvent.length Events', () => {
		render(<EventCardList eventList={dummyEvent} />);
		const numberEvents = dummyEvent.length;
		const list = screen.getByRole('list');
		const {getAllByRole} = within(list);
		const items = getAllByRole('listitem');
		expect(items.length).toBe(numberEvents);
	});
});
