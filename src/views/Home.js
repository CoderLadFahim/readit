import { useEffect } from 'react';
import { clearAll } from '../features/subreddits/subredditSlice';
import { useDispatch } from 'react-redux';
import { ListIcon } from '../icons';
import { usePosts, useComments, useSubreddits, useQuery } from '../hooks';
import { Link } from 'react-router-dom';

function Home() {
	// getting the subreddit to look for from query params, (coming initially from CatchAll and also from subreddit results on SubredditDisplay)
	const query = useQuery();
	const subredditQuery = query.get('subreddit');

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
	const posts = usePosts(subredditQuery);

	useEffect(() => {
		console.log(subredditQuery);
		posts && console.dir(posts[1]);
	}, [posts]);

	return (
		<section>
			<div className="container border relative">
				<h1 className="w-1/2 my-0 mx-auto text-center text-white text-2xl font-bold mt-24">
					Home Route <br />
					<span className="font-light">
						show posts from r/{subredditQuery}
					</span>
				</h1>
				<div className="side-btns">
					<Link
						className="top-communities-btn absolute transform w-9 h-9 bg-gray-500 rounded-full grid place-items-center right-0 bottom-0 transition hover:scale-110"
						to="/subreddits"
					>
						<ListIcon className="text-gray-50 transform scale-125" />
					</Link>
				</div>
			</div>
		</section>
	);
}

export default Home;
