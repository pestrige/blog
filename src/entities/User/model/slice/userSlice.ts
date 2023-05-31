import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { USER_LOCALSTORAGE_KEY } from "@/shared/constants";
import { setFeatureFlags } from "@/shared/lib";
import { User, UserSchema } from "../types/user";
import { saveJsonSettings } from "../services/saveJsonSettings";
import { JsonSettings } from "../types/jsonSettings";

const initialState: UserSchema = {};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setAuthData: (state, action: PayloadAction<User>) => {
			state.authData = action.payload;
			setFeatureFlags(action.payload.features);
		},
		initAuthData: (state) => {
			const json = localStorage.getItem(USER_LOCALSTORAGE_KEY);
			if (json) {
				const user = JSON.parse(json) as User;
				state.authData = user;
				setFeatureFlags(user.features);
			}
			state._mounted = true;
		},
		logout: (state) => {
			state.authData = undefined;
			localStorage.removeItem(USER_LOCALSTORAGE_KEY);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(saveJsonSettings.fulfilled, (state, action: PayloadAction<JsonSettings>) => {
			if (state.authData) {
				state.authData.jsonSettings = action.payload;
			}
		});
	},
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
