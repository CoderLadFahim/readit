import { useHistory } from 'react-router-dom';
import { useSubreddits, useQuery } from '../hooks';
import CommentsModal from '../components/CommentsModal';
import CustomSubredditIcon from '../components/CustomSubredditIcon';

function SubredditsDisplay() {
	// getting the query params
	const query = useQuery();
	const history = useHistory();
	const searchQuery = query.get('q');

	let subreddits = useSubreddits(searchQuery);

	const relevantDataExtracted =
		subreddits &&
		subreddits.map((sub) => ({
			postId: sub.id,
			subredditUrl: sub.url,
			subredditName: sub.display_name,
			namePrefixed: sub.display_name_prefixed,
			iconImg: sub.icon_img || sub.banner_img,
			subscribers: sub.subscribers,
		}));

	const handleSubredditResultClick = (name) => {
		// history.push(`/home?subreddit=${name}`);
		console.log(name);
	};

	return (
		<div className="text-green-400 font-nunito font-bold mt-5">
			<h1
				className={`container ${
					!searchQuery ? 'bg-gray-500' : 'bg-red-400'
				} text-white font-ubuntu rounded-md shadow p-3 text-left pl-5 mb-7`}
			>
				{searchQuery
					? `Search results for "${searchQuery}"`
					: 'Top Communities'}
			</h1>

			<ul>
				{relevantDataExtracted ? (
					relevantDataExtracted.map((sub) => (
						<li
							key={sub.postId}
							className="container mb-5 rounded-md bg-gray-600 shadow flex items-center py-2 gap-5 pl-5 cursor-pointer transition hover:bg-gray-500"
							onClick={() =>
								handleSubredditResultClick(
									sub.subredditName.toLowerCase()
								)
							}
						>
							{sub.iconImg ? (
								<img
									src={sub.iconImg}
									alt="subreddit icon"
									className="w-6 h-6 rounded-full border border-2 border-gray-400 shadow"
								/>
							) : (
								<CustomSubredditIcon subName={sub.namePrefixed} />
							)}
							<div className="subreddit-data text-left ">
								<h2 className="font-nunito text-gray-50 font-extrabold">
									{sub.namePrefixed}
								</h2>
								<p className="text-gray-300 text-sm">
									{new Intl.NumberFormat().format(sub.subscribers)}{' '}
									members
								</p>
							</div>
						</li>
					))
				) : (
					// skeleton loading
					<>
						{new Array(25).fill(null).map((I, i) => (
							<li
								key={i}
								className="container animate-pulse mb-5 rounded-md bg-gray-600 shadow flex items-center py-5 gap-5 pl-5"
							>
								<div className="w-6 h-6 rounded-full bg-gray-400 opacity-50"></div>
								<div
									className={`h-5 rounded-xl bg-gray-400 opacity-50`}
									style={{
										width: Math.floor(Math.random() * 10 + 10) + '%',
									}}
								></div>
							</li>
						))}
					</>
				)}
			</ul>
		</div>
	);
}

export default SubredditsDisplay;
