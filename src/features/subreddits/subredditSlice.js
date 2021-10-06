import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
	subredditsLoading: false,
	subreddits: null,
	subredditsError: false,
};

export const fetchSubreddits = createAsyncThunk(
	'subreddits/fetchSubreddits',
	async (searchTerm = null) => {
		const topSubredditsEndpoint = 'https://www.reddit.com/subreddits.json';
		const subredditsBySearchTermEndpoint = `https://www.reddit.com/search.json?q=${searchTerm}&type=sr`;
		const apiResponse = await fetch(
			searchTerm ? subredditsBySearchTermEndpoint : topSubredditsEndpoint
		);
		const apiData = await apiResponse.json();
		return apiData;
	}
);

export const subredditsSlice = createSlice({
	name: 'subreddits',
	initialState,
	reducers: {
		clearAll: (state) => {
			state.subredditsLoading = false;
			state.subreddits = null;
			state.subredditsError = false;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchSubreddits.pending, (state, action) => {
				state.subredditsLoading = true;
				state.subredditsError = false;
			})
			.addCase(
				fetchSubreddits.fulfilled,
				(
					state,
					{
						payload: {
							data: { children },
						},
					}
				) => {
					state.subredditsLoading = false;
					state.subreddits = children.map((postData) => postData.data);
					state.subredditsError = false;
				}
			)
			.addCase(fetchSubreddits.rejected, (state, action) => {
				state.subredditsLoading = false;
				state.subredditsError = true;
			});
	},
});

export const { clearAll } = subredditsSlice.actions;

export default subredditsSlice.reducer;
