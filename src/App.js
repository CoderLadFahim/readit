import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { usePosts, useSubreddits, useComments } from './hooks';
import './App.css';

function App() {
	const posts = usePosts('vim');
	const subreddits = useSubreddits();
	const comments = useComments(
		'/r/3amjokes/comments/p45vw7/my_buddy_got_arrested_on_drug_charges_and_because/'
	);

	return <div className="App">
		</div>;
}

export default App;
