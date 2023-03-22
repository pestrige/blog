import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddCommentFormSchema } from "../types/addCommentForm";

const initialState: AddCommentFormSchema = {
	text: "",
	error: "",
};

export const addCommentSlice = createSlice({
	name: "addComment",
	initialState,
	reducers: {
		setComment: (state, action: PayloadAction<string>) => {
			state.text = action.payload;
			state.error = "";
		},
		setError: (state, action: PayloadAction<string>) => {
			state.error = action.payload;
		},
	},
});

export const { actions: addCommentActions } = addCommentSlice;
export const { reducer: addCommentReducer } = addCommentSlice;
