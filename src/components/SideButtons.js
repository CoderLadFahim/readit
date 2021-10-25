import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearPosts } from '../features/posts/postsSlice';
import { ListIcon } from '../icons';
import { useQuery } from '../hooks';
import { clearAll } from '../features/subreddits/subredditSlice';

function SideButtons() {
	const history = useHistory();
	const dispatch = useDispatch();
	const query = useQuery();
	const subredditQuery = query.get('subreddit');
	const searchQuery = query.get('q');

	const handleListIconClick = () => dispatch(clearAll());

	return (
		<div className="side-btns fixed right-4 bottom-4 flex flex-col justify-between z-10">
			{subredditQuery || history.location.pathname === '/subreddits' ? (
				<Link
					className={`transform side-btn w-9 h-9 bg-blue-400 rounded-full grid place-items-center transition hover:scale-110 shadow`}
					to="/"
					onClick={() => dispatch(clearPosts())}
				>
					<span className="font-bold text-white text-xs">r/all</span>
				</Link>
			) : (
				''
			)}

			<Link
				className={`side-btn top-communities-btn transform w-9 h-9 bg-gray-500
				rounded-full grid place-items-center transition hover:scale-110
				shadow`}
				to="/subreddits"
				onClick={handleListIconClick}
			>
				<ListIcon
					className="text-gray-50
					transform scale-125"
				/>
			</Link>
		</div>
	);
}

export default SideButtons;
