import { useState } from 'react';
import Post from './Post';

const PostsDisplay = ({ posts, fetchAdditionalPosts }) => {
	const [btnClicked, setBtnClicked] = useState(false);

	return (
		<main className="post ">
			{posts.map((post, i) =>
				!post.over_18 ? <Post post={post} key={i} /> : ''
			)}

			<button
				onClick={fetchAdditionalPosts}
				className="w-full py-3 mb-5 bg-red-400 rounded-md font-bold text-white text-lg hover:bg-red-300"
			>
				Load more posts
			</button>
		</main>
	);
};

export default PostsDisplay;

/*
	 returns an array of postObjs
	 properties needed from the post objects: 
	 		title, over_18 (hide the post if true), author, permalink(need this to fetch comments), subreddit_name_prefixed, ups, downs,
  whoa, deja vu
	*/
