import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
			<Routes>
				<Route exact path="/">
					<Home />
				</Route>

				<Route exact path="/subreddits">
					<SubredditsDisplay />
				</Route>

				<Route exact path="*">
					<CatchAll />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
