// you don't have to import react in every file anymore
import React from 'react';
import '../App.css';
import { useComments } from '../hooks';

const MainPage = (props) => {
	/* You have to check its availability with the && operator like this first bro, as the data is asynchronous */

	let comments = useComments(props.posts && props.posts[0].permalink);

	/* and just leave the comment functionality bits to me, just put a random number in the comments button
	 * I have to make some more changes to useComments (i did make some) as I just reliased it can't be used iteratively (big brain yes)*/

	return (
		<main className="post">
			{props.posts &&
				props.posts.map((post, i) => {
					return (
						<div className="post-detail border-2 bg-gray-700" key={i}>
							<h4>
								<span>{post.subreddit_name_prefixed}</span>
								<span>posted by/{post.author}</span>
							</h4>
							<div>
								<h2 className="title">{post.title}</h2>
							</div>
							<div className="post-btn">
								<div>
									<button className="btn upvote">
										Upvotes<span>{post.ups}</span>
									</button>
									<button className="btn downvote">
										Downvotes<span>{post.downs}</span>
									</button>
								</div>

								<div>
									<button className="btn comment">
										Comments
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
