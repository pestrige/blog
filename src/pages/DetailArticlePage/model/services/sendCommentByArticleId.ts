import { createAsyncThunk } from "@reduxjs/toolkit";
import { Comment } from "entities/Comment";
import { ThunkConfig } from "shared/config";
import { getUserData } from "entities/User";
import { getArticleData } from "entities/Article";
import { fetchCommentsByArticleId } from "./fetchCommentsByArticleId";

export const sendCommentByArticleId = createAsyncThunk<Comment, string, ThunkConfig<string>>(
	"articleDetails/sendCommentByArticleId",
	async (commentText, thunkApi) => {
		const { extra, rejectWithValue, getState, dispatch } = thunkApi;

		const user = getUserData(getState());
		const article = getArticleData(getState());

		if (!commentText || !user?.id || !article?.id) {
			return rejectWithValue("no data");
		}

		try {
			const response = await extra.api.post<Comment>("/comments", {
				articleId: article.id,
				userId: user.id,
				text: commentText,
			});

			if (!response.data) {
				rejectWithValue("error");
			}

			dispatch(fetchCommentsByArticleId(article.id));

			return response.data;
		} catch (e) {
			return rejectWithValue("error");
		}
	}
);
