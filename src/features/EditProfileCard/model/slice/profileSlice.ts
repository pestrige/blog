import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProfileCardType } from "entities/ProfileCard";
import { ProfileSchema } from "../types/profile";
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";

const initialState: ProfileSchema = {
	data: undefined,
	form: undefined,
	isLoading: false,
	error: "",
	readonly: true,
};

export const profileSlice = createSlice({
	name: "profile",
	initialState,
	reducers: {
		setReadonly: (state, action: PayloadAction<boolean>) => {
			state.readonly = action.payload;
		},
		cancelEdit: (state) => {
			state.readonly = true;
			state.form = state.data;
		},
		updateProfile: (state, action: PayloadAction<ProfileCardType>) => {
			state.form = { ...state.form, ...action.payload };
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchProfileData.pending, (state) => {
			state.error = "";
			state.isLoading = true;
		});
		builder.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<ProfileCardType>) => {
			state.isLoading = false;
			state.data = action.payload;
			state.form = action.payload;
		});
		builder.addCase(fetchProfileData.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload ?? "";
		});
		builder.addCase(updateProfileData.pending, (state) => {
			state.error = "";
			state.isLoading = true;
		});
		builder.addCase(updateProfileData.fulfilled, (state, action: PayloadAction<ProfileCardType>) => {
			state.isLoading = false;
			state.data = action.payload;
			state.form = action.payload;
			state.readonly = true;
		});
		builder.addCase(updateProfileData.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload ?? "";
		});
	},
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
