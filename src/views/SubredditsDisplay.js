import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { clearAll } from '../features/subreddits/subredditSlice';
import { clearPosts } from '../features/posts/postsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from '../hooks';
import { fetchSubreddits } from '../features/subreddits/subredditSlice';
import CustomSubredditIcon from '../components/CustomSubredditIcon';

function SubredditsDisplay() {
	// getting the query params
	const dispatch = useDispatch();
	const query = useQuery();
	const navigate = useNavigate();

	// searchQuery coming from SearchBar.js
	const searchQuery = query.get('q');

	// // the following side effect, clears the subreddits when user visits the home route (DO NOT TAMPER WITH IT)
	// useEffect(() => {
	// 	dispatch(clearAll());
	// }, []);

	// fetching new subreddits when user searches for new ones
	useEffect(() => {
		dispatch(fetchSubreddits(searchQuery));
	}, [searchQuery]);

	let subreddits = useSelector((state) => {
		if (state) return state.subreddits.subreddits;
		return null;
	});

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
		navigate(`/?subreddit=${name}`);
		dispatch(clearPosts());
		dispatch(clearAll());
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
