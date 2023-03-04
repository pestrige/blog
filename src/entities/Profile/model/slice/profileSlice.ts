import { createSlice } from "@reduxjs/toolkit";
import { ProfileSchema } from "../types/profile";

const initialState: ProfileSchema = {
	data: undefined,
	isLoading: false,
	error: "",
	readonly: true,
};

export const profileSlice = createSlice({
	name: "profile",
	initialState,
	reducers: {},
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
