const numFormatter = (num) => {
	if (num > 999 && num < 1000000) return (num / 1000).toFixed(1) + 'k';
	if (num > 1000000) return (num / 1000000).toFixed(1) + 'M';
	if (num < 900) return num;
};

export default numFormatter;
