import { useState } from 'react';
import { useComments } from '../hooks';
import numFormatter from '../numFormatter';
import { ArrowUpIcon, CommentIcon } from '../icons';

import CustomSubredditIcon from './CustomSubredditIcon';
import CommentsModal from './CommentsModal';
import RedirectBtn from './RedirectBtn';

function Post({ post }) {
	let comments = useComments(post.permalink);
	const [permalinkForComments, setPermalinkForComments] = useState('');

	const showCommentsModal = () => setPermalinkForComments(post.permalink);
	const hideCommentsModal = () => setPermalinkForComments();

	const renderPostContent = () => {
		if (post.is_video)
			return (
				<video className="w-full" controls style={{ maxHeight: '28rem' }}>
					<source
						src={post.secure_media.reddit_video.fallback_url}
						type="video/mp4"
					></source>
				</video>
			);

		if (post.selftext)
			return (
				<p className="mx-4 text-gray-50 text-sm leading-6">
					{post.selftext}{' '}
				</p>
			);

		if (post.url) {
			if (post.url.match(/jpeg|jpg|png|bmp|tif|tiff/g))
				return <img src={post.url} alt="" />;
			else return '';
		}
	};

	return (
		<div
			// Temporary logger
			onClick={() => console.dir(post)}
			className="post-detail w-full bg-gray-700 font-nunito shadow mb-5"
			key={post.permalink}
		>
			{permalinkForComments && (
				<CommentsModal
					modalHider={hideCommentsModal}
					permalink={permalinkForComments}
				/>
			)}
			<h4 className="flex font-ubuntu no-underline mx-4 mt-3">
				<CustomSubredditIcon subName={post.subreddit_name_prefixed} />
				<span>{post.subreddit_name_prefixed}</span>
				<span> by u/{post.author}</span>
			</h4>

			<div>
				<h2 className="title mx-4 my-2 text-base font-bold">
					{post.title}
				</h2>
			</div>
			{renderPostContent()}

			<div className="post-btn mx-4 my-4 flex items-center justify-between font-ubuntu ubuntu-bold ">
				<div className="flex gap-3">
					<div className="btn upvote flex items-center justify-between rounded-lg">
						<ArrowUpIcon className="opacity-75 mr-2" />{' '}
						<span>{numFormatter(post.ups)}</span>
					</div>

					{comments && (
						<button
							onClick={showCommentsModal}
							className="btn bg-gray-800 transition  hover:bg-gray-900  right flex items-center shadow  justify-between rounded-lg w-20"
						>
							<CommentIcon />
							<span>
								{comments && numFormatter(comments.comments.length)}
							</span>
						</button>
					)}
				</div>
				<RedirectBtn
					onClick={() => console.dir(post.permalink)}
					link={post.permalink}
				/>
			</div>
		</div>
	);
}

export default Post;
