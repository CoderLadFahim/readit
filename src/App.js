import logo from './logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchSubreddits } from './features/subreddits/subredditSlice';
import { usePosts } from './hooks';
import './App.css';

function App() {
	const dispatch = useDispatch();
	const subs = useSelector((state) => state.subreddits.subreddits);
	const posts = usePosts('vim');

	useEffect(() => {
		console.dir('posts');
	}, []);

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
