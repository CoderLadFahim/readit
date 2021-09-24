import { useEffect } from 'react';
import { clearAll } from '../features/subreddits/subredditSlice';
import { useDispatch } from 'react-redux';
import { usePosts, useComments, useSubreddits, useQuery } from '../hooks';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import MainPage from '../components/MainPage';
import LeaderBoard from '../components/LeaderBoard';
=======
import CommentsModal from '../components/CommentsModal';
>>>>>>> 178df35bdd768fb507c456efda0bc111624cc9d3

function Home() {
	// getting the subreddit to look for from query params, (coming initially from CatchAll and also from subreddit results on SubredditDisplay)
	const query = useQuery();
	const subredditQuery = query.get('subreddit');

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

<<<<<<< HEAD
	useEffect(() => {
		console.log(subredditQuery);
		posts && console.log(posts);
	}, [posts]);
=======
	// uncomment the following useEffect blocc to study the data
	// useEffect(() => {
	// 	posts && console.dir(posts[1]);
	// }, [posts]);
>>>>>>> 178df35bdd768fb507c456efda0bc111624cc9d3

	return (
		<section>
			<div className="container border relative bg-gray-700">
				<h1 className="w-1/2 my-0 mx-auto text-center text-white text-2xl font-bold mt-24">
					Home Route <br />
					<span className="font-light">
						show posts from r/{subredditQuery}
					</span>
				</h1>
			</div>
<<<<<<< HEAD
			<div className='front-page'>
				{<MainPage posts={posts}></MainPage>}
				<LeaderBoard></LeaderBoard>
				
			</div>
=======
			{/* <CommentsModal /> */}
>>>>>>> 178df35bdd768fb507c456efda0bc111624cc9d3
		</section>
	);
}

export default Home;
