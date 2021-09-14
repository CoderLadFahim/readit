import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import { BrowserRouter as Router } from 'react-router-dom';

const MockSearchBar = () => (
	<Provider store={store}>
		<Router>
			<SearchBar></SearchBar>
		</Router>
	</Provider>
);

describe('input initial value', () => {
	test('input value initially is empty', () => {
		render(<MockSearchBar />);
		const inputEl = screen.getByTestId('input-el');
		const inputElInitVal = inputEl.value;
		const expectedInputElInitVal = '';

		expect(inputElInitVal).toBe(expectedInputElInitVal);
	});
});
