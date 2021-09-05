function SubredditResult(subredditData) {
	const formatApiResponseData = (data) =>
		data.data.children.map((subreddit) => subreddit.data);

	return (
		<div className="subreddit-result">
			<img src="" alt="" />
			<div>
				<h2 className="subreddit-name"></h2>
				<p className="subreddit-members"></p>
			</div>
		</div>
	);
}

export default SubredditResult;
