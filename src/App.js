import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
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

	return (
		<Router>
			{showInfoModal && <InfoModal infoModalToggler={toggleInfoModal} />}
			<NavBar infoModalToggler={toggleInfoModal} />
			<SideButtons />
			<Switch>
				{/* the following route gets catched by CatchAll route, but then gets programmatically redirected to back to /home as / is the original route */}
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
