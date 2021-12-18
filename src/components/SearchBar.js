import { useState } from 'react';
import { clearAll } from '../features/subreddits/subredditSlice';
import { useDispatch } from 'react-redux';
import {
	useNavigate,
	// useLocation
} from 'react-router-dom';
import { SearchIcon } from '../icons';

function SearchBar() {
	const [searchTerm, setSearchTerm] = useState('');
	const navigate = useNavigate();
	const dispatch = useDispatch();
	// const { pathname } = useLocation();

	// this fires on every keystroke on the searchbar input, but calls the api only when searchTerm is truthy and on enter press
	const handleEnterPress = () => {
		dispatch(clearAll());
		if (searchTerm) navigate.push(`/subreddits?q=${searchTerm}`);
		// if user searches for anything whilst being on the /subreddits route, page will refresh, showing the new data
		// if (pathname === '/subreddits') window.location.reload();
	};

	return (
		<div className="search-bar flex rounded overflow-hidden">
			<div className="icon-wrapper bg-red-400 px-2 py-1">
				<SearchIcon className="text-white" />
			</div>
			<input
				type="text"
				data-testid="input-el"
				placeholder="Search subreddits"
				className="font-nunito pl-3 bg-gray-600 flex-1 outline-none text-white font-bold"
				value={searchTerm}
				onChange={({ keyCode, target: { value: newSearchTerm } }) =>
					setSearchTerm((prevTerm) => (prevTerm = newSearchTerm))
				}
				onKeyUp={(e) => e.keyCode === 13 && handleEnterPress()}
			/>
		</div>
	);
}

export default SearchBar;
