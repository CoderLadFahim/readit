import { RedirectIcon } from '../icons';

function RedirectBtn({ link, onClick }) {
	return (
		<a
			onClick={onClick}
			className="btn text-xs bg-gray-500 flex gap-2 rounded-lg weight-light transition  text-gray-300 hover:text-red-300"
			href={`https://www.reddit.com${link}`}
			target="_blank"
		>
			Reddit
			<RedirectIcon />
		</a>
	);
}

export default RedirectBtn;
