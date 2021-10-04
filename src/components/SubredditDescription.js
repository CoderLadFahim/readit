import RedirectBtn from './RedirectBtn';
import CustomSubredditIcon from './CustomSubredditIcon';
import numFormatter from '../numFormatter';
import { useEffect } from 'react';

function SubredditDescription({ subredditData }) {
	return (
		<div className="sub-desc space-y-4 bg-gray-600 rounded-md hidden w-1/3 2xl:w-1/4  xl:block px-4 py-2">
			<div className="backdrop hidden"></div>
			<header className="flex items-baseline justify-between mt-2">
				<div className="flex gap-2">
					{subredditData.iconImg ? (
						<img
							src={subredditData.iconImg}
							alt="subreddit icon"
							className="w-6 h-6 rounded-full border border-2 border-gray-400 shadow"
						/>
					) : (
						<CustomSubredditIcon subName={subredditData.name} />
					)}
					<h2 className="font-ubuntu ubuntu-bold text-gray-50 ">
						{subredditData.name}
					</h2>
				</div>

				<RedirectBtn link={`/${subredditData.name}`} />
			</header>

			<p className="desc-text font-nunito weight-light text-gray-200 text-sm">
				{subredditData.description}
			</p>

			{subredditData.subscribers && (
				<h2 className="text-gray-300 text-base leading-3">
					<span className="ubuntu-black">
						{numFormatter(subredditData.subscribers)}
					</span>{' '}
					<br />
					<span className="text-sm">subscribers</span>
				</h2>
			)}
		</div>
	);
}

export default SubredditDescription;
