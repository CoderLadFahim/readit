import { useDispatch } from 'react-redux';
import {clearPosts} from '../features/posts/postsSlice';

function Logo({ additionalTailiwindClasses }) {
	// the following variable and side effect, clears the subreddits when user visits the home route (DO NOT TAMPER WITH IT)

	const dispatch = useDispatch();

	return (
		<h1
			onClick={() => {
				// existing posts being cleared for posts from r/All to be shown
				dispatch(clearPosts())
			}}
			className={`font-ubuntu ubuntu-black ${additionalTailiwindClasses}`}
		>
			<span className="text-red-400">read</span>
			<span className="text-gray-50">it</span>
		</h1>
	);
}

export default Logo;
