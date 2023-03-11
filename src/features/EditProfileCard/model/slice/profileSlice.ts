import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProfileCardType, ProfileCardTypeKeyof } from "entities/ProfileCard";
import { ProfileSchema } from "../types/profile";
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";

const initialState: ProfileSchema = {
	data: undefined,
	form: undefined,
	isLoading: false,
	error: undefined,
	readonly: true,
	validateErrors: {},
};

export type UpdateProfilePayload = { form: ProfileCardType; field: ProfileCardTypeKeyof };

export const profileSlice = createSlice({
	name: "profile",
	initialState,
	reducers: {
		setReadonly: (state, action: PayloadAction<boolean>) => {
			state.readonly = action.payload;
		},
		cancelEdit: (state) => {
			state.readonly = true;
			state.error = undefined;
			state.validateErrors = {};
			state.form = state.data;
		},
		updateProfile: (state, { payload }: PayloadAction<UpdateProfilePayload>) => {
			state.form = { ...state.form, ...payload.form };
			if (state.validateErrors[payload.field]) {
				delete state.validateErrors[payload.field];
			}
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchProfileData.pending, (state) => {
			state.error = undefined;
			state.validateErrors = {};
			state.isLoading = true;
		});
		builder.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<ProfileCardType>) => {
			state.isLoading = false;
			state.data = action.payload;
			state.form = action.payload;
		});
		builder.addCase(fetchProfileData.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
		builder.addCase(updateProfileData.pending, (state) => {
			state.error = undefined;
			state.validateErrors = {};
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
			state.error = action.payload?.error;
			state.validateErrors = action.payload?.validateErrors ?? {};
		});
	},
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
