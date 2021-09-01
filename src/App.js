import logo from './logo.svg';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchPosts } from './features/posts/postsSlice';
import './App.css';

function App() {
	const dispatch = useDispatch();

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
					className="bg-blue-400 text-gray-50 rounded-lg py-2 px-5 font-bold hover:bg-blue-300 transition mt-10"
					onClick={() => {
						dispatch(fetchPosts('vim'));
					}}
				>
					Fetch Posts
				</button>
			</header>
		</div>
	);
}

export default App;
