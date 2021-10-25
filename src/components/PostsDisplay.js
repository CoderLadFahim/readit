import { useSelector } from 'react-redux';
import Post from './Post';

const PostsDisplay = ({ posts, fetchAdditionalPosts }) => {
	const postsLoading = useSelector((state) => state.posts.postsLoading);

	return (
		<main className="post ">
			{posts.map((post, i) =>
				!post.over_18 ? <Post post={post} key={i} /> : ''
			)}

			<button
				onClick={fetchAdditionalPosts}
				className={`font-nunito w-full py-3 mb-5 bg-blue-400 rounded-md font-bold text-white text-lg hover:bg-blue-300 ${
					postsLoading ? 'animate-pulse' : ''
				}`}
			>
				{postsLoading ? 'Loading Posts' : 'Load more posts'}
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
