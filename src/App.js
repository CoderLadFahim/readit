import logo from './logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { usePosts, useSubreddits } from './hooks';
import './App.css';

function App() {
	const dispatch = useDispatch();
	const subs = useSelector((state) => state.subreddits.subreddits);
	const posts = usePosts('vim');
	const subreddits = useSubreddits();

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
			</header>
		</div>
	);
}

export default App;
