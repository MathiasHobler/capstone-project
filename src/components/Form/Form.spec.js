import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import Form from './Form.jsx';

describe('Form tests', () => {
	it('test if form gets rendered', () => {
		render(<Form />);
		expect(screen.getByText(/Title/i)).toBeInTheDocument();
		expect(screen.getByText(/Step forward/i)).toBeInTheDocument();
	});
});
