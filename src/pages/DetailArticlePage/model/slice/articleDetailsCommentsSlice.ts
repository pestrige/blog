import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Comment } from "@/entities/Comment";
import { ArticleDetailsCommentsSchema } from "../types/ArticleDetailsCommentsSchema";
import { fetchCommentsByArticleId } from "../services/fetchCommentsByArticleId";

export const commentsAdapter = createEntityAdapter<Comment>({
	selectId: (comment) => comment.id,
});

export const articleDetailsCommentsSlice = createSlice({
	name: "articleDetailsCommentsSlice",
	initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
		isLoading: false,
		error: undefined,
		ids: ["1"],
		entities: { "1": { id: "1", text: "2142342t f", user: { id: "1", username: "urieb iub" } } },
	}),
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCommentsByArticleId.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<Comment[]>) => {
				state.isLoading = false;
				commentsAdapter.setAll(state, action.payload);
			})
			.addCase(fetchCommentsByArticleId.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { actions: articleDetailsCommentsActions } = articleDetailsCommentsSlice;
export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
