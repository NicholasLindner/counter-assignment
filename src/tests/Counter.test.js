import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import Counter from '../components/Counter';


beforeEach(() => {
	render(<Counter />);
})

test('renders counter message', () => {
	const counterHeading = screen.getByText(/Counter/i);
	expect(counterHeading).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
	const initialCount = screen.getByText('0');
	expect(initialCount).toBeInTheDocument();
});

test('clicking + increments the count', () => {
	const plusButton = screen.getByText('+');
  	fireEvent.click(plusButton);
	const countAfterPlusOne = screen.getByText('1');
	expect(countAfterPlusOne).toBeInTheDocument();
});

test('clicking - decrements the count', () => {

	const plusButton = screen.getByText('+');
	fireEvent.click(plusButton);
	const minusButton = screen.getByText('-');
	fireEvent.click(minusButton);
	const counterAfterMinusOne = screen.getByTestId('count');
	expect(counterAfterMinusOne).toHaveTextContent('0');

});
