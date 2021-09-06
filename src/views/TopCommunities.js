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
			subredditUrl: sub.url,
			name: sub.display_name_prefixed,
			iconImg: sub.icon_img,
			subscribers: sub.subscribers,
		}));

	return (
		<div className="text-green-400 font-nunito font-bold">
			<h1 className="container">Top Communities</h1>

			<ul>
				{relevantDataExtracted &&
					relevantDataExtracted.map((sub) => (
						<li>
							<a
								href={`https://www.reddit.com${sub.subredditUrl}`}
								target="_blank"
							>
								<img src={sub.iconImg} />
								<h2>{sub.name}</h2>
								<p>{sub.subscribers}</p>
							</a>
						</li>
					))}
			</ul>
		</div>
	);
}

export default TopCommunities;
