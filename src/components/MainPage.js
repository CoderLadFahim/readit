import Post from './Post';

const MainPage = (props) => {
	return (
		<main className="post">
			{props.posts &&
				props.posts.map((post, i) => {
					return <Post post={post} key={i} />;
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
