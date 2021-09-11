import { useSubreddits, useQuery } from '../hooks';

function SubredditsDisplay() {
	// getting the query params
	const query = useQuery();
	const searchQuery = query.get('q');

	let subreddits = useSubreddits(searchQuery);

	const relevantDataExtracted =
		subreddits &&
		subreddits.map((sub) => ({
			postId: sub.id,
			subredditUrl: sub.url,
			name: sub.display_name_prefixed,
			iconImg: sub.icon_img || sub.banner_img,
			subscribers: sub.subscribers,
		}));

	// for now it redirects the user to subreddit on reddit
	const handleSubredditResultClick = (link) => {
		window.open(`https://www.reddit.com${link}`, '_blank').focus();
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
								handleSubredditResultClick(sub.subredditUrl)
							}
						>
							{sub.iconImg ? (
								<img
									src={sub.iconImg}
									alt="subreddit icon"
									className="w-6 h-6 rounded-full border border-2 border-gray-400 shadow"
								/>
							) : (
								<CustomSubIcon subName={sub.name} />
							)}
							<div className="subreddit-data text-left ">
								<h2 className="font-nunito text-gray-50 font-extrabold">
									{sub.name}
								</h2>
								<p className="text-gray-300 text-sm">
									{sub.subscribers} members
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
								className="container animate-pulse mb-5 rounded-md bg-gray-600 shadow flex items-center py-5 gap-5 pl-5 cursor-pointer transition hover:bg-gray-500"
							>
								<div className="w-6 h-6 rounded-full bg-gray-400 opacity-50"></div>
								<div
									className={`h-5 rounded-xl bg-gray-400 opacity-50`}
									style={{
										width: Math.floor(Math.random() * 20 + 10) + '%',
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

function CustomSubIcon({ subName }) {
	const availableColors = [
		'red',
		'yellow',
		'green',
		'blue',
		'indigo',
		'purple',
		'pink',
	];

	return (
		<div
			className={`w-6 h-6 rounded-full bg-${
				availableColors[Math.floor(Math.random() * availableColors.length)]
			}-500 font-ubuntu text-sm text-center text-white shadow grid place-items-center`}
		>
			<h1 className="text-center">{subName[2].toUpperCase()}</h1>
		</div>
	);
}

export default SubredditsDisplay;