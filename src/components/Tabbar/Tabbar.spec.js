import {render, screen, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';

import Tabbar from './Tabbar';

afterEach(cleanup);

describe('Event Card Component', () => {
	it('should render correctly props', () => {
		render(<Tabbar />);
		expect(screen.getByText('SAVED')).toBeInTheDocument();
		expect(screen.getByText('GOING')).toBeInTheDocument();
	});
});
