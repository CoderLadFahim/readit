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

// takes in a permalink and returns an array of 1st level comments of the given link's associated post
export const useComments = (permalink) => {
	const API_ENPOINT = `https://www.reddit.com${permalink}.json`;
	const [comments, setComments] = useState(null);

	useEffect(() => {
		const fetchComments = async () => {
			const apiResponse = await fetch(API_ENPOINT);
			const [, commentsJson] = await apiResponse.json();
			const temp = commentsJson.data.children[0].data.body;
			const commentBodies = commentsJson.data.children.map(
				(commentObj) => commentObj.data.body
			);

			setComments(commentBodies);
		};

		fetchComments();
	}, []);

	return comments;
};

export const useQuery = () => {
	const routeLocation = useLocation();
	const searchParams = new URLSearchParams(routeLocation.search);
	return searchParams;
};
