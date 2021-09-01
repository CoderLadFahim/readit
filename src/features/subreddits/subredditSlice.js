import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
	subredditsLoading: false,
	subreddits: null,
	subredditsError: false,
};

export const fetchSubreddits = createAsyncThunk(
	'counter/fetchSubreddits',
	async () => {
		const apiResponse = await fetch(`https://www.reddit.com/subreddits.json`);
		const apiData = await apiResponse.json();
		return apiData;
	}
);

export const subredditsSlice = createSlice({
	name: 'subreddits',
	initialState,
	reducers: {},
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

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } =
	subredditsSlice.actions;

export default subredditsSlice.reducer;
