import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './features/posts/postsSlice';
import { fetchSubreddits } from './features/subreddits/subredditSlice';

// takes in subreddit name and returns an array of posts from that subreddit
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

// returns an array of popular subreddits
export const useSubreddits = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchSubreddits());
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
