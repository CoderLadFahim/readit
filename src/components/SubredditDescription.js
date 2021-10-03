import { useSubredditDesc } from '../hooks.js';

function SubredditDescription({ subredditDataToSearch }) {
	const subDesc = useSubredditDesc(subredditDataToSearch);
	return (
		<div class="sub-desc bg-gray-600 rounded-md">
			<h1 class="subreddit-title"></h1>
			<p class="description-text"></p>
			<div class="member-status"></div>
		</div>
	);
}
export default SubredditDescription;
