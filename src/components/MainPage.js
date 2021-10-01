// you don't have to import react in every file anymore
import { useState, useEffect } from 'react';
import '../App.css';
import { useComments } from '../hooks';
import { ArrowDownIcon, ArrowUpIcon, CommentIcon } from '../icons';
import CustomSubredditIcon from './CustomSubredditIcon';
import CommentsModal from './CommentsModal';

const MainPage = (props) => {
	let comments = useComments(props.posts[0].permalink);
	const [permalinkForComments, setPermalinkForComments] = useState('');

	const showComments = (permalink) => setPermalinkForComments(permalink);

	const hideComments = () => setPermalinkForComments('');

	// useEffect(() => {
	// 	console.dir(props.posts);
	// }, [props.posts]);

	return (
		<main className="post">
			{props.posts &&
				props.posts.map((post, i) => {
					return (
						<div className="post-detail container bg-gray-700" key={i}>
							{/* <CommentsModal /> */}
							<h4 className="flex">
								<CustomSubredditIcon subName={post.author} />
								<span>{post.subreddit_name_prefixed}</span>
								<span>posted by/{post.author}</span>
							</h4>
							<div>
								<h2 className="title">{post.title}</h2>
							</div>
							{!post.media && <img src={post.url} />}
							{props.posts.is_video && (
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
										onClick={() => {
											// setPermalinkForComments(post.permalink)
											console.log(post.permalink);
										}}
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
				})}
		</main>
	);
};

export default MainPage;

/*
	 returns an array of postObjs
	 properties needed from the post objects: 
	 		title, over_18 (hide the post if true), author, permalink(need this to fetch comments), subreddit_name_prefixed, ups, downs,
  whoa, deja vu
	*/
