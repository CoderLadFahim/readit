import Logo from './Logo';
import SearchBar from './SearchBar';
import { Link, useHistory } from 'react-router-dom';
import { InfoCircleIcon } from '../icons';

function NavBar({ infoModalToggler }) {
	const routeLocation = useHistory();

	const handleLogoClick = () => {
		setTimeout(() => {
			window.location.reload();
		}, 50);
	};

	return (
		<nav className="bg-gray-700 py-4 sm:py-3">
			<ul className="container flex justify-between items-center">
				<li onClick={handleLogoClick} className="hidden sm:block text-xl">
					<Link to="/">
						<Logo />
					</Link>
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
