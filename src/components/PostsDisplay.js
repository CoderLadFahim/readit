import Post from './Post';

const PostsDisplay = ({ posts }) => {
	return (
		<main className="post ">
			{posts.map((post, i) =>
				!post.over_18 ? <Post post={post} key={i} /> : ''
			)}
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
