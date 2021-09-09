import { useEffect } from 'react';
import { clearAll } from '../features/subreddits/subredditSlice';
import { useDispatch } from 'react-redux';

function Home() {
	// the following variable and side effect, clears the subreddits when user visits the home route
	const subredditSliceActionDispatcher = useDispatch();
	useEffect(() => {
		subredditSliceActionDispatcher(clearAll());
	}, []);

	return (
		<section>
			<h1 className="w-1/2 my-0 mx-auto text-center text-white text-2xl font-bold mt-24">
				Home Route (/)
			</h1>
		</section>
	);
}

export default Home;
