import { useEffect } from 'react';
import { clearAll } from '../features/subreddits/subredditSlice';
import { useDispatch } from 'react-redux';
import { usePosts, useComments, useSubreddits } from '../hooks';

function Home() {
	// the following variable and side effect, clears the subreddits when user visits the home route
	const subredditSliceActionDispatcher = useDispatch();
	useEffect(() => {
		subredditSliceActionDispatcher(clearAll());
	}, []);
	/*
	 returns an array of postObjs
	 properties needed from the post objects: 
	 		title, over_18 (hide the post if true), author, permalink(need this to fetch comments), subreddit_name_prefixed, ups, downs,
	*/
	const posts = usePosts('marriage');

	useEffect(() => {
		posts && console.dir(posts[1]);
	}, [posts]);

	return (
		<section>
			<h1 className="w-1/2 my-0 mx-auto text-center text-white text-2xl font-bold mt-24">
				Home Route (/)
			</h1>
		</section>
	);
}

export default Home;
