import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { useSubredditData, useSubreddits } from '../hooks';

const LeaderBoard = () => {
	// const [shortenSubreddits, setShortenSubreddits] = useState([]);
	const subreddits = useSubreddits();

	// useEffect(() => {
	// 	subreddits && setShortenSubreddits(subreddits.slice(0, 4));
	// }, [subreddits]);

	return (
		<div className="leader-board">
			<div className="top"> Top Communities</div>
			{subreddits &&
				subreddits.slice(0, 4).map((data, i) => {
					return (
						<div className="subreddit" key={i}>
							<h4>{data.display_name}</h4>
							<span className="text-span">
								{' '}
								{data.subscribers} subscribers
							</span>
						</div>
					);
				})}
			<Link className="bottom block" to="/subreddits">
				View All
			</Link>
		</div>
	);
};

export default LeaderBoard;
