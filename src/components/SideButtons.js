import { Link, useHistory } from 'react-router-dom';
import { ListIcon } from '../icons';
import { useQuery } from '../hooks';

function SideButtons() {
	const history = useHistory();
	const query = useQuery();
	const subredditQuery = query.get('subreddit');

	return (
		<div className="side-btns absolute right-0 bottom-0 border flex flex-col justify-between">
			<button
				className="transform w-9 h-9 bg-gray-200 rounded-full grid place-items-center transition hover:scale-110 shadow sm:hidden"
				me
			>
				<span className="font-bold text-gray-600">r/?</span>
			</button>
			{subredditQuery !== 'all' && (
				<Link
					className="transform w-9 h-9 bg-blue-400 rounded-full grid place-items-center transition hover:scale-110 shadow"
					to="/home?subreddit=all"
				>
					<span className="font-bold text-white text-xs">r/all</span>
				</Link>
			)}
			<Link
				className="top-communities-btn transform w-9 h-9 bg-gray-500
				rounded-full grid place-items-center transition hover:scale-110
				shadow"
				to="/subreddits"
			>
				{' '}
				<ListIcon
					className="text-gray-50
				transform scale-125"
				/>{' '}
			</Link>{' '}
		</div>
	);
}
export default SideButtons;
