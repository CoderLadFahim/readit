import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../App.css';
import { useSubredditData, useSubreddits } from '../hooks';

const LeaderBoard = () => {
	const history = useHistory();
	// const [shortenSubreddits, setShortenSubreddits] = useState([]);
	const subreddits = useSubreddits();

	const handleSubredditResultClick = (name) => {
		history.push(`/home?subreddit=${name}`);

		setTimeout(() => {
			window.location.reload();
		}, 50);
	};

	// useEffect(() => {
	// 	subreddits && setShortenSubreddits(subreddits.slice(0, 4));
	// }, [subreddits]);

	return (
		<div className="leader-board">
			<div className="top font-bold"> Top Communities</div>
			{subreddits &&
				subreddits.slice(0, 4).map((data, i) => {
					return (
						<div
							onClick={() =>
								handleSubredditResultClick(data.display_name)
							}
							className="subreddit"
							key={i}
						>
							<h4 className="font-bold text-sm">{data.display_name}</h4>
							<span className="text-span">
								{data && data.subscribers.toLocaleString('hi-IN')}{' '}
								subscribers
							</span>
						</div>
					);
				})}

			<Link
				className="bottom block font-bold transition hover:bg-blue-300"
				to="/subreddits"
				onClick={() => {
					setTimeout(() => {
						window.location.reload();
					}, 50);
				}}
			>
				View All
			</Link>
		</div>
	);
};

export default LeaderBoard;
