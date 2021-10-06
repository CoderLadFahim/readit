import { useEffect } from 'react';
import { clearAll } from '../features/subreddits/subredditSlice';
import { useDispatch } from 'react-redux';
import { usePosts, useQuery, useSubredditData } from '../hooks';
import CommentsModal from '../components/CommentsModal';
import MainPage from '../components/MainPage';
import LeaderBoard from '../components/LeaderBoard';
import SubredditDescription from '../components/SubredditDescription';

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
	// 	posts && console.log(posts, subData);
	// }, [posts]);

	return (
		<section>
			<div className="container mt-6 flex gap-4 items-start justify-between">
				{posts && <MainPage posts={posts}></MainPage>}
				{subData ? <SubredditDescription subredditData={subData} /> : ''}
				<LeaderBoard></LeaderBoard>
			</div>
		</section>
	);
}

export default Home;
