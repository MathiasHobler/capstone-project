import '@testing-library/jest-dom';
import {render} from '@testing-library/react';

import dummyEvent from '../../utils/data';

import Detail from './Detail';

describe('When Event Card is clicked, details should be shown', () => {
	it('should render correctly props', () => {
		const singleEvent = dummyEvent[0];
		render(<Detail event={singleEvent} />);
		expect(singleEvent.eventName).toBe('Event1');
		expect(singleEvent.date).toBe('THU 30. Jun');
	});
});
