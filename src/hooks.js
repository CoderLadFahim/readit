import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './features/posts/postsSlice';
import { fetchSubreddits } from './features/subreddits/subredditSlice';

// subredditName is case-insensitive also it doesn't need to be prefixed with r/ just the subname
export const usePosts = (subredditName) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPosts(subredditName));
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

// takes in a subredditName and returns an object with subredditName and subredditDescription is apiResponse is OK
export const useSubredditData = (subredditQuery) => {
	const [subDesc, setSubDesc] = useState(null);

	useEffect(() => {
		async function getSubredditDesc() {
			try {
				const subredditSearchEndpoint = `https://www.reddit.com/search.json?q=${subredditQuery}&type=sr`;
				const apiResponse = await fetch(subredditSearchEndpoint);
				// returns an array of matching subreddits
				const apiData = await apiResponse.json();

				// getting only the first search result
				const firstSubredditResultData = apiData.data.children[0].data;

				// extracting the relevant properties
				const subredditDataObj = {
					name: firstSubredditResultData.display_name_prefixed,
					description: firstSubredditResultData.public_description,
					iconImg:
						firstSubredditResultData.icon_img ||
						firstSubredditResultData.banner_img,
					subscribers: firstSubredditResultData.subscribers,
				};

				setSubDesc(subredditDataObj);
			} catch (e) {
				setSubDesc({
					msg: '400, not found',
				});
			}
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
