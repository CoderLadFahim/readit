function CustomSubredditIcon({ subName }) {
	
	const availableColors = [
		'red',
		'yellow',
		'green',
		'blue',
		'indigo',
		'purple',
		'pink',
	];

	return (
		<div
			className={`w-6 h-6 rounded-full bg-${
				availableColors[Math.floor(Math.random() * availableColors.length)]
			}-500 font-ubuntu text-sm text-center text-white shadow grid place-items-center`}
		>
			<h1 className="text-center">{subName.author && subName.author[0].toUpperCase() }</h1>
		</div>
	);
}

export default CustomSubredditIcon;
