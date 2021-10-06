import { Link, useHistory } from 'react-router-dom';
import '../App.css';
import { useSubreddits } from '../hooks';
import CustomSubredditIcon from './CustomSubredditIcon';

const LeaderBoard = () => {
	const history = useHistory();
	const subreddits = useSubreddits();

	const handleSubredditResultClick = (name) => {
		history.push(`/home?subreddit=${name}`);

		setTimeout(() => {
			window.location.reload();
		}, 100);
	};

	return (
		<div className="leader-board">
			<div className="top font-bold"> Top Communities</div>
			{subreddits
				? subreddits.slice(0, 4).map((data, i) => {
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
				: // skeleton loading for LeaderBoard
				  [1, 2, 3, 4].map((el) => (
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

			<Link
				className="bottom block font-bold transition hover:bg-blue-300"
				to="/subreddits"
			>
				View All
			</Link>
		</div>
	);
};

export default LeaderBoard;
