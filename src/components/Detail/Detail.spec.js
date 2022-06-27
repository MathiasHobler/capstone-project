import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import dummyEvent from '../../utils/data';

import Detail from './Detail';

describe('When Event Card is clicked, details should be shown', () => {
	it('should render correctly props', () => {
		const singleEvent = dummyEvent[0];
		render(<Detail event={singleEvent} />);
		expect(screen.getByText(singleEvent.eventName)).toBeInTheDocument();
		expect(screen.getByText(singleEvent.desc)).toBeInTheDocument();
		expect(screen.getByText(singleEvent.date)).toBeInTheDocument();
	});
});
