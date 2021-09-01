import logo from './logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPosts } from './features/posts/postsSlice';
import { fetchSubreddits } from './features/subreddits/subredditSlice';
import { fetchCommentsByPermalink } from './features/subreddits/subredditSlice';
import './App.css';

function App() {
	const dispatch = useDispatch();
	const subs = useSelector((state) => state.subreddits.subreddits);

	useEffect(() => {
		console.dir(subs);
	}, [subs]);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<button
					className="bg-blue-400 text-gray-50 rounded-lg py-2 px-5  hover:bg-blue-300 transition mt-10"
					onClick={() => {
						dispatch(fetchPosts('all'));
					}}
				>
					Fetch Posts
				</button>
				<button
					className="bg-red-400 text-gray-50 rounded-lg py-2 px-5  hover:bg-red-300 transition mt-10"
					onClick={() => {
						dispatch(fetchSubreddits());
					}}
				>
					Fetch Subreddits
				</button>
			</header>
		</div>
	);
}

export default App;
