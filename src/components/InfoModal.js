import Logo from './Logo.js';
import { CrossIcon, LinkedInIcon, GithubIcon, DiscordIcon } from '../icons.js';

function InfoModal({ infoModalToggler }) {
	return (
		<section className="backdrop w-screen h-screen bg-gray-800">
			<Logo />
			<CrossIcon className="text-blue-400" onClick={infoModalToggler} />
		</section>
	);
}

export default InfoModal;
