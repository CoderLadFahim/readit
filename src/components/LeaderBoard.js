import { useHistory } from 'react-router-dom';
import '../App.css';
import { useSubreddits } from '../hooks';
import CustomSubredditIcon from './CustomSubredditIcon';
import { useDispatch } from 'react-redux';
import { clearPosts } from '../features/posts/postsSlice';

const LeaderBoard = () => {
	const history = useHistory();
	const subreddits = useSubreddits();
	const dispatch = useDispatch();

	const handleSubredditResultClick = (name) => {
		history.push(`/?subreddit=${name}`);
		// clearing the existing posts to load new ones
		dispatch(clearPosts());
	};

	return (
		<div className="leader-board rounded-2xl overflow-hidden">
			<div className="top font-bold">Top Communities</div>
			<div className="w-full">
				{subreddits
					? subreddits.map((data, i) => {
							return (
								<div
									onClick={() =>
										handleSubredditResultClick(data.display_name)
									}
									className="flex items-center gap-4 py-3 px-6 bg-gray-600 transition hover:bg-gray-500 cursor-pointer"
									key={i}
								>
									{data.icon_img || data.banner_img ? (
										<img
											src={data.icon_img || data.banner_img}
											alt="subreddit icon"
											className="w-6 h-6 rounded-full border border-2 border-gray-400 shadow"
										/>
									) : (
										<CustomSubredditIcon
											subName={data.display_name_prefixed}
										/>
									)}

									<div className="text-left">
										<h4 className="font-bold text-sm text-gray-50">
											{data.display_name_prefixed}
										</h4>
										<span className="text-span font-nunito">
											{data &&
												new Intl.NumberFormat().format(
													data.subscribers
												)}{' '}
											subscribers
										</span>
									</div>
								</div>
							);
					  })
					: [1, 2, 3, 4].map((el) => (
							<div
								key={el}
								className="w-full bg-gray-600 py-4 animate-pulse px-5"
							>
								<div className="skeleton-content space-y-2">
									<div className="skeleton-logo w-6 h-6 rounded-full bg-gray-500 opacity-50"></div>
									<div className="skeleton-text space-y-1">
										<div className="skeleton-title w-14 h-4 bg-gray-500 rounded-xl opacity-50"></div>
										<div className="skeleton-numbers w-24 h-3 bg-gray-500 rounded-xl opacity-50"></div>
									</div>
								</div>
							</div>
					  ))}
			</div>
		</div>
	);
};

export default LeaderBoard;
