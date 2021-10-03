import { useState } from 'react';
import { useComments } from '../hooks';
import {
	ArrowDownIcon,
	ArrowUpIcon,
	CommentIcon,
	RedirectIcon,
} from '../icons';

import CustomSubredditIcon from './CustomSubredditIcon';
import CommentsModal from './CommentsModal';

function Post({ post }) {
	let comments = useComments(post.permalink);
	const [permalinkForComments, setPermalinkForComments] = useState('');

	const numFormatter = (num) => {
		if (num > 999 && num < 1000000) return (num / 1000).toFixed(1) + 'k';
		if (num > 1000000) return (num / 1000000).toFixed(1) + 'M';
		if (num < 900) return num;
	};

	const showCommentsModal = () => setPermalinkForComments(post.permalink);
	const hideCommentsModal = () => setPermalinkForComments();

	return (
		<div
			className="post-detail container bg-gray-700 font-nunito shadow"
			key={post.permalink}
		>
			{permalinkForComments && (
				<CommentsModal
					modalHider={hideCommentsModal}
					permalink={permalinkForComments}
				/>
			)}
			<h4 className="flex font-ubuntu no-underline mx-4 mt-3">
				<CustomSubredditIcon subName={post.author} />
				<span>{post.subreddit_name_prefixed}</span>
				<span>posted by u/{post.author}</span>
			</h4>

			<div>
				<h2 className="title mx-4 my-2 text-base font-bold">
					{post.title}
				</h2>
			</div>
			{/* POST CONTENT */}
			{post.selftext ? (
				<p className="mx-4 text-gray-50 text-sm leading-6">
					{post.selftext}{' '}
				</p>
			) : (
				!post.is_video && <img src={post.url} />
			)}
			{post.is_video && (
				<video width="100%" controls>
					<source
						src={post.secure_media.reddit_video.fallback_url}
						type="video/mp4"
					></source>
				</video>
			)}
			{/* Confusing and hard to read right? well, that's reactjs for you*/}

			<div className="post-btn mx-4 my-4 flex items-center justify-between font-ubuntu ubuntu-bold ">
				<div className="flex gap-3">
					<button className="btn upvote flex items-center justify-between rounded-lg">
						<ArrowUpIcon className="opacity-50 mr-2" />{' '}
						<span>{numFormatter(post.ups)}</span>
					</button>

					<button
						onClick={showCommentsModal}
						className="btn bg-gray-800 transition  hover:bg-gray-900  right flex items-center shadow  justify-between rounded-lg w-20"
					>
						<CommentIcon />
						<span>
							{comments && numFormatter(comments.comments.length)}
						</span>
					</button>
				</div>
				<a
					className="btn text-xs bg-gray-600 flex gap-2 rounded-lg weight-light transition  text-gray-300 hover:text-red-400"
					href={`https://www.reddit.com${post.permalink}`}
					target="_blank"
				>
					Reddit
					<RedirectIcon />
				</a>
			</div>
		</div>
	);
}

export default Post;
