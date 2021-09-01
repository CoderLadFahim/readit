import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
	postsLoading: false,
	posts: null,
	postsError: false,
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
	extraReducers: (builder) => {
		builder
			.addCase(fetchPosts.pending, (state, action) => {
				state.postsLoading = true;
				state.postsError = false;
			})
			.addCase(
				fetchPosts.fulfilled,
				(
					state,
					{
						payload: {
							data: { children },
						},
					}
				) => {
					state.postsLoading = false;
					state.posts = children.map((postData) => postData.data);
					state.postsError = false;
				}
			)
			.addCase(fetchPosts.rejected, (state, action) => {
				state.postsLoading = false;
				state.postsError = true;
			});
	},
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = postsSlice.actions;

export default postsSlice.reducer;
