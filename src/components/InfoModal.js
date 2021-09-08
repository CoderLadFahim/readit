import Logo from './Logo.js';
import { CrossIcon, LinkedInIcon, GithubIcon, DiscordIcon } from '../icons.js';

// Main Component
function InfoModal({ infoModalToggler }) {
	const authors = [
		{
			name: 'Fahim',
			linkedIn: 'https://www.linkedin.com/in/fahim-al-emroz-52b21720b/',
			github: 'https://github.com/CoderLadFahim',
			discord: 'https://discord.com/users/857790946413641735',
			email: 'fahimalemroz@gmail.com',
		},
		{
			name: 'HanzHanz',
			linkedIn: 'https://www.linkedin.com/in/hasan-omar-a8a94221b/',
			github: 'https://github.com/hanzala019',
			discord: 'https://discord.com/users/768892963756441640',
			email: 'hanzalaomar1@gmail.com',
		},
	];

	return (
		<section className="backdrop w-screen h-screen absolute">
			<div className="info-card w-11/12 h-5/6 sm:w-3/5 sm:h-3/5 md:w-1/2 xl:w-1/4 xl:h-5/6 2xl:w-1/3 bg-gray-600 z-10  absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl flex flex-col justify-evenly items-center">
				<Logo additionalTailiwindClasses={'text-3xl'} />
				<button>
					<CrossIcon
						className="text-blue-400 absolute block right-3 top-3 transform transition hover:scale-125"
						onClick={infoModalToggler}
					/>
				</button>
				<h1 className="text-2xl text-gray-300 font-bold font-nunito">
					Created by
				</h1>

				<div className="author-cards flex justify-center h-1/2 w-5/6 rounded-2xl overflow-hidden">
					{authors.map((authorData) => (
						<AuthorCard key={authorData.name} author={authorData} />
					))}
				</div>
			</div>
			<div
				className="backdrop bg-gray-800 opacity-95 absolute top-0 bottom-0 right-0 left-0 z-0"
				onClick={infoModalToggler}
			></div>
		</section>
	);
}

function AuthorCard({ author: { name, linkedIn, github, discord, email } }) {
	const copyEmailToClipboard = () => navigator.clipboard.writeText(email);

	return (
		<div className="author-card bg-gray-700 flex flex-col w-1/2 justify-around items-center  box-content px-2">
			<h1 className="author-name">
				<span className="text-blue-400">{'<'}</span>
				<span className="text-green-400 font-bold">{name}</span>
				<span className="text-blue-400 ">{'/>'}</span>
			</h1>

			<div className="author-social w-full flex justify-around">
				<a href={linkedIn} target="_blank">
					<LinkedInIcon className="social-icon text-gray-400" />
				</a>
				<a href={github} target="_blank">
					<GithubIcon className="social-icon text-gray-400" />
				</a>
				<a href={discord} target="_blank">
					<DiscordIcon className="social-icon text-gray-400" />
				</a>
			</div>

			<button
				onClick={copyEmailToClipboard}
				className="p-2 px-3 text-gray-200 font-nunito text-xs font-bold bg-gray-600 rounded-lg transition hover:bg-gray-500"
			>
				Copy Email
			</button>
		</div>
	);
}
export default InfoModal;
