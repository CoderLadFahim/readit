import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './features/posts/postsSlice';

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
