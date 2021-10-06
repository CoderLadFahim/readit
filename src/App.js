import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import InfoModal from './components/InfoModal';
import SubredditsDisplay from './views/SubredditsDisplay';
import Home from './views/Home';
import CatchAll from './views/CatchAll';
import SideButtons from './components/SideButtons';
import Logo from './components/Logo';
import scrollDisabler from './scrollDisabler';

function App() {
	const [showInfoModal, setShowInfoModal] = useState(false);

	const toggleInfoModal = () => {
		setShowInfoModal((prevState) => !prevState);
		scrollDisabler();
	};

	// return (
	// 	<Router>
	// 		{showInfoModal && <InfoModal infoModalToggler={toggleInfoModal} />}
	// 		<NavBar infoModalToggler={toggleInfoModal} />
	// 		<SideButtons />
	// 		<Switch>
	// 			<Route exact path="/home">
	// 				<Home />
	// 			</Route>

	// 			<Route exact path="/subreddits">
	// 				<SubredditsDisplay />
	// 			</Route>

	// 			<Route exact path="*">
	// 				<CatchAll />
	// 			</Route>
	// 		</Switch>
	// 	</Router>
	// );
	return (
		<div classNamee="w-screen h-screen">
			<Logo />
			<h1 classNamee="text-blue-200">Coming Soon</h1>
		</div>
	);
}

export default App;
