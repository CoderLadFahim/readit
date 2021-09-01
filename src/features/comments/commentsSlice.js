import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
	commentsLoading: false,
	comments: null,
	commentsError: false,
};

export const fetchCommentsByPermalink = createAsyncThunk(
	'counter/fetchCommentsByPermalink',
	async (permalink) => {
		const apiResponse = await fetch(
			`https://www.reddit.com/r${permalink}.json`
		);
		const apiData = await apiResponse.json();
		return apiData;
	}
);

export const commentsSlice = createSlice({
	name: 'comments',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCommentsByPermalink.pending, (state, action) => {
				state.commentsLoading = true;
				state.commentsError = false;
			})
			.addCase(
				fetchCommentsByPermalink.fulfilled,
				(
					state,
					// Destructuring the children property from action.payload.data.children
					{ payload }
				) => {
					state.commentsLoading = false;
					state.comments = payload.data[1].children.map(
						(postData) => postData.data
					);
					state.commentsError = false;
				}
			)
			.addCase(fetchCommentsByPermalink.rejected, (state, action) => {
				state.commentsLoading = false;
				state.commentsError = true;
			});
	},
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } =
	commentsSlice.actions;

export default commentsSlice.reducer;
