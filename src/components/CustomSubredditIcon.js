function CustomSubredditIcon({ subName }) {
	const availableColors = [
		'#EF4444',
		'#F59E0B',
		'#ECFDF5',
		'#3B82F6',
		'#6366F1',
		'#8B5CF6',
		'#EC4899',
	];

	return (
		<div
			style={{
				backgroundColor:
					availableColors[
						Math.floor(Math.random() * availableColors.length)
					],
			}}
			className={`w-6 h-6 rounded-full font-ubuntu ubuntu-bold text-sm text-center text-white shadow grid place-items-center`}
		>
			<h1 className="text-center">{subName && subName[2].toUpperCase()}</h1>
		</div>
	);
}

export default CustomSubredditIcon;
