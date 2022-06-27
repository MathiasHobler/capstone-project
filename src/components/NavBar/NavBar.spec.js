import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {createMemoryHistory} from 'history';
import {MemoryRouter as Router} from 'react-router-dom';

import NavBar from './NavBar';

describe('testing navbar', () => {
	it('test, if navbar is rendering with two links', () => {
		render(
			<Router>
				<NavBar />
			</Router>
		);
		const links = screen.getAllByRole('link');
		expect(links).toHaveLength(2);
	});
	it('NavLinks paths 1', () => {
		render(
			<Router>
				<NavBar />
			</Router>
		);

		const history = createMemoryHistory();

		userEvent.click(screen.getByTestId('navHome'));
		expect(history.location.pathname).toEqual('/');
		const navcreate = screen.getByTestId('navCreate');
		expect(navcreate.getAttribute('href')).toEqual('/create');
	});
});
