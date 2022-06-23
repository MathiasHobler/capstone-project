import NavBar from './NavBar';
import {cleanup, render, wrapper} from '@testing-library/react';

beforeEach(cleanup);

describe('testing navbar', () => {
	it('test, if navbar is rendering', () => {
		const {queryByTestId} = render(<NavBar />);
		expect(queryByTestId('navbar')).toBeTruthy();
	});
});

// it('NavLinks paths 1', () => {
// 	render(<NavBar />);
// 	nav = wrapper.find('section');
// 	NavLink = wrapper.find('NavLink');
// 	expect(wrapper.find('NavLink')).toHaveLength(4);
// 	const firstNavLink = wrapper.find('NavLink').first();
// 	expect(firstNavLink.prop('to')).toEqual('/');
// });

// it('NavLinks paths 2', () => {
// 	render(<NavBar />);
// 	nav = wrapper.find('section');
// 	NavLink = wrapper.find('NavLink');
// 	expect(wrapper.find('NavLink')).toHaveLength(4);
// 	const secondNavLink = wrapper.find('NavLink').at(1);
// 	expect(secondNavLink.prop('to')).toEqual('/about');
// });
