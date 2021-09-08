import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { usePosts, useSubreddits, useComments } from './hooks';
import './App.css';
import NavBar from './components/NavBar';
import InfoModal from './components/InfoModal';
import TopCommunities from './views/TopCommunities';

function App() {
	const [showInfoModal, setShowInfoModal] = useState(false);
	const posts = usePosts('all');
	const subreddits = useSubreddits();
	const comments = useComments(
		'/r/3amjokes/comments/p45vw7/my_buddy_got_arrested_on_drug_charges_and_because/'
	);

	const toggleInfoModal = () => {
		console.log(showInfoModal);
		setShowInfoModal((prevState) => !prevState);
	};

	return (
		<Router>
			{showInfoModal && <InfoModal infoModalToggler={toggleInfoModal} />}
			<NavBar infoModalToggler={toggleInfoModal} />
			<TopCommunities />
		</Router>
	);
}

export default App;
