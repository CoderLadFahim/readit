import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice';
import subredditsReducer from '../features/subreddits/subredditSlice';

export const store = configureStore({
	reducer: {
		posts: postsReducer,
		subreddits: subredditsReducer,
	},
});
