import { useSubredditData } from '../hooks.js';
import RedirectBtn from './RedirectBtn';
import CustomSubredditIcon from './CustomSubredditIcon';
import numFormatter from '../numFormatter';

function SubredditDescription({ subredditDataToSearch }) {
	const subredditData = useSubredditData(subredditDataToSearch);

	return (
		<div class="sub-desc bg-gray-600 rounded-md">
			<header>
				<div className="flex">
					{false ? (
						<img
							src={subredditData.iconImg}
							alt="subreddit icon"
							className="w-6 h-6 rounded-full border border-2 border-gray-400 shadow"
						/>
					) : (
						<CustomSubredditIcon subName={'r/madlads'} />
					)}
					<h2 className="font-nunito text-gray-50 font-extrabold">
						{'r/madlads'}
					</h2>
				</div>

				<RedirectBtn link="www.google.com" />
			</header>

			<p className="desc-text">
				It's a bit embarrassing to admit here, but I was once attacked by a
				whole bunch of street mimes..It's a bit embarrassing to admit here,
				but I was once attacked by a whole bunch of street mimes..
			</p>

			<h2 className="text-gray-300 text-sm">
				<span className="block">{numFormatter(12000)}</span> members
			</h2>
		</div>
	);
}

export default SubredditDescription;
