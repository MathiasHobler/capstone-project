import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';

import {Inputfield} from './Inputfield.jsx';

describe('Inputfield component', () => {
	it('test if Inputfield gets rendered', () => {
		const type = 'text';
		const lable = 'label';
		const value = 'value';
		render(<Inputfield type={type} label={lable} value={value} />);
		const label = screen.getByText(lable);
		expect(label).toBeInTheDocument();
		const inputEl = screen.getByTestId('input');
		expect(inputEl).toBeInTheDocument();
		expect(inputEl).toHaveAttribute('type', type);
		expect(inputEl).toHaveAttribute('value', value);
	});
});
