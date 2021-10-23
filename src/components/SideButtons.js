import { Link, useHistory, useLocation } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {clearPosts} from '../features/posts/postsSlice';
import { ListIcon } from '../icons';
import { useQuery } from '../hooks';

function SideButtons() {
	const history = useHistory();
	const dispatch = useDispatch();
	const routeLocation = useLocation();
	const query = useQuery();
	const subredditQuery = query.get('subreddit');
	// const dispatch = useDispatch();

	// these refreshers are necessary as the hooks can't be called on query change
	const handleListIconClick = () => {
		if (routeLocation.pathname === '/subreddits')
			setTimeout(() => {
				window.location.reload();
			}, 1000);
	};

	return (
		<div className="side-btns fixed right-4 bottom-4 flex flex-col justify-between z-10">
			<button className="hidden side-btn transform w-9 h-9 bg-gray-200 rounded-full grid place-items-center transition hover:scale-110 shadow sm:hidden">
				<span className="font-bold text-gray-600">r/?</span>
			</button>
			{subredditQuery ? (
				<Link
					className="transform side-btn w-9 h-9 bg-blue-400 rounded-full grid place-items-center transition hover:scale-110 shadow"
					to="/"
					onClick={() => dispatch(clearPosts())}
				>
					<span className="font-bold text-white text-xs">r/all</span>
				</Link>
			) : (
				''
			)}

			{history.location.search || history.location.pathname === '/' ? (
				<Link
					className="side-btn top-communities-btn transform w-9 h-9 bg-gray-500
				rounded-full grid place-items-center transition hover:scale-110
				shadow"
					to="/subreddits"
					onClick={handleListIconClick}
				>
					<ListIcon
						className="text-gray-50
					transform scale-125"
					/>
				</Link>
			) : (
				''
			)}
		</div>
	);
}

export default SideButtons;
