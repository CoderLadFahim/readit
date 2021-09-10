import { Link, useHistory } from 'react-router-dom';
import { ListIcon } from '../icons';

function SideButtons() {
	const history = useHistory();

	return (
		<div className="side-btns absolute right-0 bottom-0">
			<button
				className="transform w-9 h-9 bg-gray-200 rounded-full grid place-items-center transition hover:scale-110"
				me
			>
				<span className="font-bold text-gray-600">r/?</span>
			</button>
			<button
				className="transform w-9 h-9 bg-blue-400 rounded-full grid place-items-center transition hover:scale-110"
				me
			>
				<span className="font-bold text-white text-xs">r/all</span>
			</button>

			<Link
				className="top-communities-btn transform w-9 h-9 bg-gray-500 rounded-full grid place-items-center transition hover:scale-110"
				to="/subreddits"
			>
				<ListIcon className="text-gray-50 transform scale-125" />
			</Link>
		</div>
	);
}
