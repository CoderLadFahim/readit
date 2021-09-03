import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './features/posts/postsSlice';
import { fetchSubreddits } from './features/subreddits/subredditSlice';

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
