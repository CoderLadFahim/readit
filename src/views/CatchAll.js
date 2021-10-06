import { useHistory } from 'react-router-dom';

function CatchAll() {
	const history = useHistory();
	if (history.location.pathname === '/')
		return history.push('/home?subreddit=all');

	return (
		<section className="w-screen h-screen flex flex-col items-center justify-evenly">
			<h1 className="text-red-500 font-bold font-nunito text-7xl">404</h1>
			<p className="text-gray-50 text-2xl font-nunito text-center">
				Not Found
			</p>
		</section>
	);
}

export default CatchAll;
