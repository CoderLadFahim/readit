function AppNav() {
	// this is the function for fetching subreddits needed from the searchbar input
	const searchSubreddits = async (searchTerm = 'minecraft') => {
		const apiResponse = await fetch(
			`https://www.reddit.com/search.json?q=${searchTerm}&type=sr`
		);

		const jsonData = await apiResponse.json();
		// console.dir(
		// 	jsonData.data.children.map(
		// 		(subreddit) => subreddit.data.display_name_prefixed
		// 	)
		// );
	};

	return <nav></nav>;
}

export default AppNav;
