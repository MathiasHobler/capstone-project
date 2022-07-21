import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {createMemoryHistory} from 'history';
import {MemoryRouter as Router} from 'react-router-dom';

import NavBar from './NavBar';

const NAV_HOME_ID = 'Home';
const NAV_CRESTE_ID = 'Create';
const NAV_BOOKMARK_ID = 'Bookmark';

describe('testing navbar', () => {
	it('test, if navbar is rendering with three links', () => {
		render(
			<Router>
				<NavBar />
			</Router>
		);
		const links = screen.getAllByRole('link');
		expect(links).toHaveLength(3);
	});

	it('NavLinks paths 1', () => {
		render(
			<Router>
				<NavBar />
			</Router>
		);
		const history = createMemoryHistory();

		userEvent.click(screen.getByTestId(NAV_HOME_ID));
		expect(history.location.pathname).toEqual('/');
		const navcreate = screen.getByTestId(NAV_CRESTE_ID);
		expect(navcreate.getAttribute('href')).toEqual('/create');
		const navBookmark = screen.getByTestId(NAV_BOOKMARK_ID);
		expect(navBookmark.getAttribute('href')).toEqual('/bookmark');
	});
});
