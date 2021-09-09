import { useEffect, useState } from 'react';
import { useSubreddits, useQuery } from '../hooks';

function SubredditsDisplay() {
	// getting the query params
	const query = useQuery();
	const searchQuery = query.get('q');

	const subreddits = useSubreddits(searchQuery);

	const relevantDataExtracted =
		subreddits &&
		subreddits.map((sub) => ({
			postId: sub.id,
			subredditUrl: sub.url,
			name: sub.display_name_prefixed,
			iconImg: sub.icon_img || sub.banner_img,
			subscribers: sub.subscribers,
		}));

	return (
		<div className="text-green-400 font-nunito font-bold mt-5">
			<h1 className="container bg-gray-500 text-white font-ubuntu rounded-md shadow p-3 text-left pl-5 mb-7">
				{searchQuery
					? `Search results for "${searchQuery}"`
					: 'Top Communities'}
			</h1>

			<ul>
				{relevantDataExtracted
					? relevantDataExtracted.map((sub) => (
							<li
								key={sub.postId}
								className="container mb-5 rounded-md bg-gray-600 shadow flex items-center py-2 gap-5 pl-5 cursor-pointer transition hover:bg-gray-500"
							>
								<img
									src={sub.iconImg}
									className={`${
										!sub.iconImg && 'invisible'
									}  w-6 h-6 rounded-full border border-2 border-blue-400 shadow`}
								/>

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
					: 'Loading...'}
			</ul>
		</div>
	);
}

export default SubredditsDisplay;
