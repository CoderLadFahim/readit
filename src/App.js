import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import InfoModal from './components/InfoModal';
import SubredditsDisplay from './views/SubredditsDisplay';
import Home from './views/Home';
import CatchAll from './views/CatchAll';

function App() {
	const [showInfoModal, setShowInfoModal] = useState(false);

	const toggleInfoModal = () => {
		setShowInfoModal((prevState) => !prevState);
	};

	return (
		<Router>
			{showInfoModal && <InfoModal infoModalToggler={toggleInfoModal} />}
			<NavBar infoModalToggler={toggleInfoModal} />
			<Switch>
				<Route exact path="/home">
					<Home />
				</Route>

				<Route exact path="/subreddits">
					<SubredditsDisplay />
				</Route>

				<Route exact path="*">
					<CatchAll />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
