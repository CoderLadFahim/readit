import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice';
import subredditsReducer from '../features/subreddits/subredditSlice';
import commentsReducer from '../features/comments/commentsSlice';

export const store = configureStore({
	reducer: {
		posts: postsReducer,
		subreddits: subredditsReducer,
		comments: commentsReducer,
	},
});
