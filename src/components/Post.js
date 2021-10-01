import { useState } from 'react';
import { useComments } from '../hooks';
import { ArrowDownIcon, ArrowUpIcon, CommentIcon } from '../icons';

import CustomSubredditIcon from './CustomSubredditIcon';
import CommentsModal from './CommentsModal';

function Post({ post }) {
	let comments = useComments(post.permalink);
	const [permalinkForComments, setPermalinkForComments] = useState('');

	const showCommentsModal = () => setPermalinkForComments(post.permalink);
	const hideCommentsModal = () => setPermalinkForComments();

	return (
		<div className="post-detail container bg-gray-700" key={post.permalink}>
			{permalinkForComments && (
				<CommentsModal
					modalHider={hideCommentsModal}
					permalink={permalinkForComments}
				/>
			)}
			<h4 className="flex">
				<CustomSubredditIcon subName={post.author} />
				<span>{post.subreddit_name_prefixed}</span>
				<span>posted by/{post.author}</span>
			</h4>
			<div>
				<h2 className="title">{post.title}</h2>
			</div>
			{!post.media && <img src={post.url} />}
			{post.is_video && (
				<video width="100%" controls>
					<source
						src={post.secure_media.reddit_video.fallback_url}
						type="video/mp4"
					></source>
				</video>
			)}

			<div className="post-btn">
				<div>
					<button className="btn upvote">
						<ArrowUpIcon /> Upvotes<span>{post.ups}</span>
					</button>
					<button className="btn downvote">
						<ArrowDownIcon /> DownVotes
						<span>{post.downs}</span>
					</button>

					<button
						onClick={showCommentsModal}
						className="btn comment right"
					>
						<CommentIcon /> Comments
						<span>
							{/* returns comments for a single post (don't worry about it man, I'll handle everything)*/}
							{comments && comments.comments.length}
						</span>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Post;
