import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import InfoModal from './components/InfoModal';
import SubredditsDisplay from './views/SubredditsDisplay';
import Home from './views/Home';
import CatchAll from './views/CatchAll';
import SideButtons from './components/SideButtons';
import scrollDisabler from './scrollDisabler';

function App() {
	const [showInfoModal, setShowInfoModal] = useState(false);

	const toggleInfoModal = () => {
		setShowInfoModal((prevState) => !prevState);
		scrollDisabler();
	};

	useEffect(() => {
		alert(
			'This site is still under development, please excuse a few bugs here and there'
		);
	}, []);

	return (
		<Router>
			{showInfoModal && <InfoModal infoModalToggler={toggleInfoModal} />}
			<NavBar infoModalToggler={toggleInfoModal} />
			<SideButtons />
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
