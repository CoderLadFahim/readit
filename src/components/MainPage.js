import Post from './Post';

const MainPage = ({ posts }) => {
	return (
		<main className="post ">
			{posts &&
				posts.map((post, i) => {
					if (!post.over_18) return <Post post={post} key={i} />;
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
