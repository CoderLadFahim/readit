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

	const handleEnterPress = (e) =>
		searchTerm && e.keyCode === 13 ? searchSubreddits(searchTerm) : '';

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
							onKeyUp={handleEnterPress}
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
