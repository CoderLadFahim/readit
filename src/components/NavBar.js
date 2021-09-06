import Logo from './Logo';
import SubredditResult from './SubredditResult';
import { useState } from 'react';
import { SearchIcon } from '../icons';
import { InfoCircleIcon } from '../icons';

function NavBar() {
	const [searchTerm, setSearchTerm] = useState('');
	const [searchResults, setSubredditResults] = useState([]);

	const formatApiResponseData = (data) =>
		data.data.children.map((subreddit) => subreddit.data);

	// this is the function for fetching subreddits needed from the searchbar input
	const searchSubreddits = async (searchTerm = 'minecraft') => {
		const apiResponse = await fetch(
			`https://www.reddit.com/search.json?q=${searchTerm}&type=sr`
		);
		const jsonData = await apiResponse.json();

		setSubredditResults((prevData) => (prevData = jsonData));
	};

	// this fires on every keystroke on the searchbar input, but calls the api only when searchTerm is truthy and on enter press
	const handleEnterPress = (e) =>
		searchTerm ? searchSubreddits(searchTerm) : '';

	return (
		<nav className="bg-gray-700 py-4">
			<ul className="container flex justify-between items-center">
				<li className="hidden sm:block">
					<Logo />
				</li>
				<li className="w-5/6">
					<div className="search-bar flex rounded overflow-hidden">
						<div className="icon-wrapper bg-red-400 px-2 py-1">
							<SearchIcon className="text-white" />
						</div>
						<input
							type="text"
							placeholder="Search subreddits"
							className="font-nunito text-center bg-gray-600 flex-1 outline-none text-white"
							value={searchTerm}
							onChange={({
								keyCode,
								target: { value: newSearchTerm },
							}) =>
								setSearchTerm((prevTerm) => (prevTerm = newSearchTerm))
							}
							onKeyUp={(e) => e.keyCode === 13 && handleEnterPress()}
						/>
					</div>
				</li>
				<li className="border">
					<InfoCircleIcon className="text-blue-400 block" />
				</li>
			</ul>
			{searchResults.length !== 0 && (
				<div className="search-results">
					{searchResults.map((result) => (
						<SubredditResult subredditData={result} />
					))}
				</div>
			)}
		</nav>
	);
}

export default NavBar;
