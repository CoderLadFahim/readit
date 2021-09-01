import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
	posts: null,
};

export const fetchPosts = createAsyncThunk(
	'counter/fetchPosts',
	async (subredditName) => {
		const apiResponse = await fetch(
			`https://www.reddit.com/r/${subredditName.toLowerCase()}.json`
		);
		const apiData = await apiResponse.json();
		return apiData;
	}
);

export const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {},
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = postsSlice.actions;

export default postsSlice.reducer;
