import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../features/posts/postsSlice';
import { useQuery } from '../hooks';
import PostsDisplay from '../components/PostsDisplay';
import LeaderBoard from '../components/LeaderBoard';
import SubredditDescription from '../components/SubredditDescription';

function Home() {
	// getting the subreddit to look for from query params, (coming initially from CatchAll and also from subreddit results on SubredditDisplay)
	const query = useQuery();
	const subredditQuery = query.get('subreddit');
	const dispatch = useDispatch();

	// let subData = useSubredditData(subredditQuery || 'all');

	useEffect(() => {
		dispatch(fetchPosts(subredditQuery || 'all'));
	}, [subredditQuery]);

	const posts = useSelector((state) => {
		if (state.posts.posts) return state.posts.posts;
		return null;
	});

	// subreddit description logic
	// returns an obj {name, iconImg, desc, subscribers} this state is passed to SubredditDescription
	const [subDesc, setSubDesc] = useState(null);

	// description data for r/All
	const allSubredditData = {
		name: 'r/all',
		description:
			'The most active posts from all of Reddit. Come here to see new posts rising and be a part of the conversation.',
	};

	async function getSubredditDesc(subredditQuery) {
		if (subredditQuery === 'all') return setSubDesc(allSubredditData);

		try {
			const subredditSearchEndpoint = `https://www.reddit.com/search.json?q=${subredditQuery}&type=sr`;
			const apiResponse = await fetch(subredditSearchEndpoint);
			// returns an array of matching subreddits
			const apiData = await apiResponse.json();

			// getting only the first search result
			const firstSubredditResultData = apiData.data.children[0].data;

			// extracting the relevant properties
			const subredditDataObj = {
				name: firstSubredditResultData.display_name_prefixed,
				description: firstSubredditResultData.public_description,
				iconImg:
					firstSubredditResultData.icon_img ||
					firstSubredditResultData.banner_img,
				subscribers: firstSubredditResultData.subscribers,
			};

			setSubDesc(
				!subredditQuery.includes('all')
					? subredditDataObj
					: allSubredditData
			);
		} catch (e) {
			setSubDesc({
				msg: '400, not found',
			});
		}
	}

	// fetching new sub descriptions everytime subredditQuery changes
	useEffect(() => {
		setSubDesc(null);
		getSubredditDesc(subredditQuery || 'all');
	}, [subredditQuery]);

	return (
		<section>
			<div className="container mt-6 flex gap-4 items-start justify-between">
				{posts.length ? (
					<PostsDisplay posts={posts}></PostsDisplay>
				) : (
					<div className="w-full xl:w-1/3 space-y-5">
						{[...new Array(24)].map((el) => (
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
						))}
					</div>
				)}
				{subDesc ? (
					<SubredditDescription subredditData={subDesc} />
				) : (
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
