import '@testing-library/jest-dom';
import {render} from '@testing-library/react';
import {MemoryRouter as Router} from 'react-router-dom';

import dummyEvent from '../../utils/data';

import Detail from './Detail';

describe('When Event Card is clicked, details should be shown', () => {
	it('should render correctly props', () => {
		const singleEvent = dummyEvent[0];
		render(
			<Router>
				<Detail event={singleEvent} />
			</Router>
		);
		expect(singleEvent.title).toBe('Event1');
		expect(singleEvent.date).toBe('THU 30. Jun');
	});
});
