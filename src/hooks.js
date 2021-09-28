import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './features/posts/postsSlice';
import { fetchSubreddits } from './features/subreddits/subredditSlice';

// takes in subreddit name and sortType (defaults to 'hot'). Returns an array of posts, (based on sortType) from that subreddit
// subredditName is case-insensitive also it doesn't need to be prefixed with r/ just the subname

export const usePosts = (subredditName, sortType = 'hot') => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPosts(subredditName, sortType));
	}, []);

	const posts = useSelector((state) => {
		if (state.posts.posts) return state.posts.posts;
		return null;
	});

	return posts;
};

// returns an array of popular subreddits takes in an optional param
export const useSubreddits = (searchTerm = null) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchSubreddits(searchTerm));
	}, []);

	const subreddits = useSelector((state) => {
		if (state) return state.subreddits.subreddits;
		return null;
	});

	return subreddits;
};

export const useSubredditDesc = (subreddit) => {
	const [subDesc, setSubDesc] = useState(null);
	useEffect(() => {
		async function getSubredditDesc() {
			const subredditsBySearchTermEndpoint = `https://www.reddit.com/search.json?q=${subreddit}&type=sr`;
			const apiResponse = await fetch(subredditsBySearchTermEndpoint);
			const apiData = await apiResponse.json();

			const firstSubredditResultData = apiData.data.children[0].data;
			const subredditName = firstSubredditResultData.display_name_prefixed;
			const subredditDescription =
				firstSubredditResultData.public_description;

			setSubDesc({ subredditName, subredditDescription });
		}
		getSubredditDesc();
	}, []);

	return subDesc;
};

// takes in a permalink and returns an array of 1st level comments of the given link's associated post
export const useComments = (permalink) => {
	const API_ENPOINT = `https://www.reddit.com${permalink}.json`;
	const [commentsObj, setCommentsObj] = useState(null);

	useEffect(() => {
		const fetchComments = async () => {
			const apiResponse = await fetch(API_ENPOINT);
			const [parentPost, commentsJson] = await apiResponse.json();

			const commentBodies = commentsJson.data.children.map((commentObj) => ({
				commentAuthor: commentObj.data.author,
				commentText: commentObj.data.body,
			}));

			const comment = {
				parentPostAuthorName: parentPost.data.children[0].data.author,
				comments: commentBodies,
			};

			setCommentsObj(comment);
		};

		fetchComments();
	}, []);

	return commentsObj;
};

export const useQuery = () => {
	const routeLocation = useLocation();
	const searchParams = new URLSearchParams(routeLocation.search);
	return searchParams;
};
