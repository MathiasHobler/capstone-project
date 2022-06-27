import {render, fireEvent, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import Form from './Form.jsx';

describe('Form tests', () => {
	it('test if form gets rendered', () => {
		render(<Form />);

		expect(screen.getByText(/Title/i)).toBeInTheDocument();
		expect(screen.getByText(/Date/i)).toBeInTheDocument();
		expect(screen.getByText(/Time/i)).toBeInTheDocument();
		expect(screen.getByText(/Description/i)).toBeInTheDocument();
		expect(screen.getByText(/submit/i)).toBeInTheDocument();
	});
	it('test if button is disabled for empty title', () => {
		render(<Form />);
		const titleInput = screen.getByTestId(/testInput/i);

		fireEvent.change(titleInput, {target: {value: ''}});
		const submitBTN = screen.getByText(/submit/i);

		expect(submitBTN).toHaveAttribute('disabled');
	});
	it('test if button is enabled for none empty title', () => {
		render(<Form />);
		const titleInput = screen.getByTestId(/testInput/i);

		fireEvent.change(titleInput, {target: {value: 'test'}});
		const submitBTN = screen.getByText(/submit/i);

		expect(submitBTN).not.toHaveAttribute('disabled');
	});
});
