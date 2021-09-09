import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { SearchIcon } from '../icons';

function SearchBar() {
	const [searchTerm, setSearchTerm] = useState('');
	const history = useHistory();
	const { pathname } = useLocation();
	const location = useLocation();
	// const [searchedSubredditResults, setSearchSubredditResults] = useState([]);

	// this is the function for fetching subreddits needed from the searchbar input
	// const searchSubreddits = async (searchTerm) => {
	// 	const apiResponse = await fetch(
	// 		`https://www.reddit.com/search.json?q=${searchTerm}&type=sr`
	// 	);
	// 	const jsonData = await apiResponse.json();

	// 	const subreddits = jsonData.data.children.map(
	// 		(subreddit) => subreddit.data
	// 	);

	// 	setSearchSubredditResults((prevData) => (prevData = subreddits));
	// };

	// this fires on every keystroke on the searchbar input, but calls the api only when searchTerm is truthy and on enter press
	const handleEnterPress = (e) => {
		if (searchTerm) history.push(`/subreddits?q=${searchTerm}`);
		if (pathname === '/subreddits') window.location.reload();
	};

	return (
		<div className="search-bar flex rounded overflow-hidden">
			<div className="icon-wrapper bg-red-400 px-2 py-1">
				<SearchIcon className="text-white" />
			</div>
			<input
				type="text"
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
