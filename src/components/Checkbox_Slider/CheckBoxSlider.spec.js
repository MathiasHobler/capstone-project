import {render, fireEvent, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';

import CheckBoxSlide from './CheckBoxSlide';

afterEach(cleanup);

const CHECKBOX_ID = 'my-checkbox';
const SPAN_ID = 'slider-text';

describe('CheckBoxSlide component', () => {
	it('should render input', () => {
		const {getByTestId} = render(<CheckBoxSlide />);
		const box = getByTestId(CHECKBOX_ID);
		expect(box).toBeInTheDocument();
	});

	it('should render span', () => {
		const {getByTestId} = render(<CheckBoxSlide />);
		const span = getByTestId(SPAN_ID);
		expect(span).toBeInTheDocument();
	});
});

describe('CheckBoxSlide component', () => {
	it('should allow clicks', async () => {
		const mockOnClick = jest.fn();
		const {getByTestId} = render(<CheckBoxSlide setValue={mockOnClick}></CheckBoxSlide>);
		const checkbox = getByTestId(CHECKBOX_ID);
		expect(checkbox.checked).toEqual(false);
		fireEvent.click(checkbox);
		expect(checkbox.checked).toEqual(true);
		fireEvent.click(checkbox);
		expect(checkbox.checked).toEqual(false);
	});
});

describe('CheckBoxSlide component', () => {
	it('changes style checkbox as checkbox is checked/unchecked', () => {
		const mockOnClick = jest.fn();
		const {getByTestId} = render(<CheckBoxSlide setValue={mockOnClick} />);
		const checkbox = getByTestId(CHECKBOX_ID);
		expect(checkbox.checked).toEqual(false);
		expect(mockOnClick).toHaveBeenCalledTimes(0);
		fireEvent.click(checkbox);
		expect(mockOnClick).toHaveBeenCalledTimes(1);
		expect(checkbox.checked).toEqual(true);
		fireEvent.click(checkbox);
		expect(mockOnClick).toHaveBeenCalledTimes(2);
		expect(checkbox.checked).toEqual(false);
	});

	it('changes slider text as checkbox is checked/unchecked', () => {
		const mockOnClick = jest.fn();
		const {getByTestId} = render(<CheckBoxSlide setValue={mockOnClick} />);
		const span = getByTestId(SPAN_ID);
		const checkbox = getByTestId(CHECKBOX_ID);
		expect(span.textContent).toEqual('Private');
		fireEvent.click(checkbox);
		expect(span.textContent).toEqual('Public');
		fireEvent.click(checkbox);
		expect(span.textContent).toEqual('Private');
	});
});
