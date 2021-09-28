import { useEffect } from 'react';
import { clearAll } from '../features/subreddits/subredditSlice';
import { useDispatch } from 'react-redux';
import { usePosts, useComments, useQuery, useSubredditData } from '../hooks';
import CommentsModal from '../components/CommentsModal';

function Home() {
	// getting the subreddit to look for from query params, (coming initially from CatchAll and also from subreddit results on SubredditDisplay)
	const query = useQuery();
	const subredditQuery = query.get('subreddit');
	// returns an obj {name, iconImg, desc, subscribers}
	const subData = useSubredditData(subredditQuery);

	// the following variable and side effect, clears the subreddits when user visits the home route (DO NOT TAMPER WITH IT)
	const subredditSliceActionDispatcher = useDispatch();
	useEffect(() => {
		subredditSliceActionDispatcher(clearAll());
	}, []);

	/*
	 returns an array of postObjs
	 properties needed from the post objects: 
	 		title, over_18 (hide the post if true), author, permalink(need this to fetch comments), subreddit_name_prefixed, ups, downs,
	*/
	const posts = usePosts(subredditQuery);

	// uncomment the following useEffect blocc to study the data
	// useEffect(() => {
	// 	posts && console.dir(posts[1]);
	// }, [posts]);

	return (
		<section>
			<div className="container border relative">
				<h1 className="w-1/2 my-0 mx-auto text-center text-white text-2xl font-bold mt-24">
					Home Route <br />
					<span className="font-light">
						show posts from r/{subredditQuery}
					</span>
				</h1>
			</div>
			{/* <CommentsModal /> */}
		</section>
	);
}

export default Home;
