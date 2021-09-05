import Logo from './Logo';
import { useState } from 'react';
import { SearchIcon } from '../icons';
import { InfoCircleIcon } from '../icons';

function NavBar() {
	const [searchTerm, setSearchTerm] = useState('');

	// this is the function for fetching subreddits needed from the searchbar input
	const searchSubreddits = async (searchTerm = 'minecraft') => {
		const apiResponse = await fetch(
			`https://www.reddit.com/search.json?q=${searchTerm}&type=sr`
		);
		const jsonData = await apiResponse.json();

		// for now it just logs
		console.log(jsonData);
	};

	// this fires on every keystroke on the searchbar input, but calls the api only when searchTerm is truthy and on enter press
	const handleEnterPress = (e) =>
		searchTerm ? searchSubreddits(searchTerm) : '';

	return (
		<nav className="bg-gray-700">
			<ul className="container">
				<li>
					<Logo />
				</li>
				<li>
					<div className="search-bar">
						<div className="icon-wrapper">
							<SearchIcon />
						</div>
						<input
							type="text"
							placeholder="Search subreddits."
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
				<li>
					<InfoCircleIcon className="" />
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
