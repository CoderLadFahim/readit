import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
	postsLoading: false,
	posts: [],
	postsError: false,
	// value to send as the "after" query param to reddits post api endpoint (will give the application next batch of posts)
	afterValue: null,
};

export const fetchPosts = createAsyncThunk(
	'posts/fetchPosts',
	async ({
		subredditQuery: subredditName,
		afterValueForFetchingNewPosts: afterValue,
	}) => {
		const apiEndpoint = afterValue
			? `https://www.reddit.com/r/${subredditName.toLowerCase()}.json?after=${afterValue}`
			: `https://www.reddit.com/r/${subredditName.toLowerCase()}.json`;

		const apiResponse = await fetch(apiEndpoint);
		const apiData = await apiResponse.json();

		return apiData;
	}
);

export const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		clearPosts: (state) => {
			state.posts = [];
		},
	},
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
					// Destructuring the children property from action.payload.data.children
					{
						payload: {
							data: { children, after },
						},
					}
				) => {
					state.postsLoading = false;
					state.posts = [
						...state.posts,
						...children.map((postData) => postData.data),
					];
					state.postsError = false;

					state.afterValue = after;
				}
			)
			.addCase(fetchPosts.rejected, (state, action) => {
				state.postsLoading = false;
				state.postsError = true;
			});
	},
});

export const { clearPosts } = postsSlice.actions;

export default postsSlice.reducer;
