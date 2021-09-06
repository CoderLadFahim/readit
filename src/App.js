import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { usePosts, useSubreddits, useComments } from './hooks';
import './App.css';
import NavBar from './components/NavBar';
import TopCommunities from './views/TopCommunities';

function App() {
	const posts = usePosts('vim');
	const subreddits = useSubreddits();
	const comments = useComments(
		'/r/3amjokes/comments/p45vw7/my_buddy_got_arrested_on_drug_charges_and_because/'
	);

	return (
		<div className="App">
			<NavBar />
			<TopCommunities />
		</div>
	);
}

export default App;
