import { useEffect } from 'react';
import { clearAll } from '../features/subreddits/subredditSlice';
import { useDispatch } from 'react-redux';
import { usePosts, useQuery, useSubredditData } from '../hooks';
import PostsDisplay from '../components/PostsDisplay';
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
			{/* <CommentsModal /> */}
			<div className="container mt-6 flex gap-4 items-start justify-between">
				{posts ? (
					<PostsDisplay posts={posts}></PostsDisplay>
				) : (
					<div className="w-full xl:w-1/3 space-y-5">
						{
							// skeleton loading for Posts
							[1, 2, 3].map((el) => (
								<div
									key={el}
									className="animate-pulse flex flex-col justify-between w-full   h-96 rounded-xl bg-gray-600 p-4"
								>
									<div className="flex  space-x-3">
										<div className="skeleton-title w-24 h-5 bg-gray-500 rounded-xl opacity-50"></div>
										<div className="skeleton-title w-20 h-5 bg-gray-500 rounded-xl opacity-50"></div>
									</div>

									<div className="w-full h-4/5 rounded-xl  bg-gray-500"></div>
								</div>
							))
						}
					</div>
				)}
				{subData ? (
					<SubredditDescription subredditData={subData} />
				) : (
					// skeleton loading for SubredditDescription
					<div className="h-44 hidden xl:block w-1/3 p-3 animate-pulse bg-gray-600 rounded-md space-y-10">
						<div className="skeleton-title w-20 h-5 bg-gray-500 rounded-xl opacity-50"></div>

						<div className="space-y-2">
							<div className="w-11/12 h-4 bg-gray-500 rounded-xl opacity-50"></div>
							<div className="w-11/12 h-4 bg-gray-500 rounded-xl opacity-50"></div>
							<div className="w-11/12 h-4 bg-gray-500 rounded-xl opacity-50"></div>
							<div className="w-4/5 h-4 bg-gray-500 rounded-xl opacity-50"></div>
						</div>
					</div>
				)}
				<LeaderBoard></LeaderBoard>
			</div>
		</section>
	);
}

export default Home;
