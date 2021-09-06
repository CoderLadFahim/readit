import { useEffect, useState } from 'react';
import { useSubreddits } from '../hooks';

function TopCommunities() {
	const subreddits = useSubreddits();
	useEffect(() => {
		console.dir(subreddits);
	}, [subreddits]);

	const relevantDataExtracted =
		subreddits &&
		subreddits.map((sub) => ({
			postId: sub.id,
			subredditUrl: sub.url,
			name: sub.display_name_prefixed,
			iconImg: sub.icon_img,
			subscribers: sub.subscribers,
		}));

	return (
		<div className="text-green-400 font-nunito font-bold mt-24">
			<h1 className="container bg-gray-500 text-white font-ubuntu rounded-md shadow p-3 text-left pl-5 mb-10">
				Top Communities
			</h1>

			<ul>
				{relevantDataExtracted &&
					relevantDataExtracted.map((sub) => (
						<li
							key={sub.postId}
							className="container mb-5 rounded-md bg-gray-600 shadow"
						>
							<a
								href={`https://www.reddit.com${sub.subredditUrl}`}
								target="_blank"
							>
								<img
									src={sub.iconImg}
									className="w-5 h-5 rounded-full border border-2 border-blue-300"
								/>
								<div className="subreddit-data">
									<h2 className="font-nunito text-gray-50 ">
										{sub.name}
									</h2>
									<p className="text-gray-300">
										{sub.subscribers} members
									</p>
								</div>
							</a>
						</li>
					))}
			</ul>
		</div>
	);
}

export default TopCommunities;
