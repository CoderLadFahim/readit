import { useSubredditData } from '../hooks.js';
import RedirectBtn from './RedirectBtn';
import CustomSubredditIcon from './CustomSubredditIcon';
import numFormatter from '../numFormatter';

function SubredditDescription({ subredditToSearchDataFor }) {
	const subredditData = useSubredditData(subredditToSearchDataFor);

	return (
		<div class="sub-desc space-y-4  bg-gray-600 rounded-md hidden w-1/3  xl:block px-4 py-2">
			<header className="flex items-baseline justify-between mt-2">
				<div className="flex gap-2">
					{false ? (
						<img
							src={subredditData.iconImg}
							alt="subreddit icon"
							className="w-6 h-6 rounded-full border border-2 border-gray-400 shadow"
						/>
					) : (
						<CustomSubredditIcon subName={'r/madlads'} />
					)}
					<h2 className="font-ubuntu ubuntu-bold text-gray-50 ">
						{'r/madlads'}
					</h2>
				</div>

				<RedirectBtn link={`/r/dankmemes`} />
			</header>

			<p className="desc-text font-nunito weight-light text-gray-200 text-sm">
				It's a bit embarrassing to admit here, but I was once attacked by a
				whole bunch of street mimes..It's a bit embarrassing to admit here,
				but I was once attacked by a whole bunch of street mimes.. but I was
				once attacked by a whole bunch of street mimes..
			</p>

			<h2 className="text-gray-300 text-base leading-3">
				<span className="ubuntu-black">{numFormatter(12000)}</span> <br />
				<span className="text-sm">subscribers</span>
			</h2>
		</div>
	);
}

export default SubredditDescription;
