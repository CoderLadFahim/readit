import Logo from './Logo';
import SubredditResult from './SubredditResult';
import SearchBar from './SearchBar';
import { useState } from 'react';
import { InfoCircleIcon } from '../icons';
import { SearchIcon } from '../icons';

function NavBar({ infoModalToggler }) {
	return (
		<nav className="bg-gray-700 py-4 sm:py-3">
			<ul className="container flex justify-between items-center">
				<li className="hidden sm:block text-xl">
					<Logo />
				</li>
				<li className="w-5/6 sm:w-1/2 lg:w-1/3">
					<SearchBar />
				</li>
				<li onClick={infoModalToggler}>
					<button>
						<InfoCircleIcon className="text-blue-400 transform scale-125" />
					</button>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
