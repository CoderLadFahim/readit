import { useEffect } from 'react';
import { clearAll } from '../features/subreddits/subredditSlice';
import { useDispatch } from 'react-redux';
import { usePosts, useSubreddits } from '../hooks';

function Home() {
	// the following variable and side effect, clears the subreddits when user visits the home route
	const subredditSliceActionDispatcher = useDispatch();
	useEffect(() => {
		subredditSliceActionDispatcher(clearAll());
	}, []);

	const posts = usePosts('all');
	console.log(posts);
	const subreddits = useSubreddits('starterpacks')
	console.log(subreddits);
	//confused  with how to implement usePosts and useSubreddits. it doesnt have anycontent it to show.
	return (
		<section>
			<h1 className="w-1/2 my-0 mx-auto text-center text-white text-2xl font-bold mt-24">
				Home Route (/)
			</h1>
			<h1 className="w-1/2 my-0 mx-auto text-center text-white text-2xl font-bold mt-24">
				{posts[2].subreddit}
			</h1>
			
		</section>
	);
}

export default Home;
