import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { USER_LOCALSTORAGE_KEY } from "@/shared/constants";
import { setFeatureFlags } from "@/shared/lib";
import { User, UserSchema } from "../types/user";
import { saveJsonSettings } from "../services/saveJsonSettings";
import { JsonSettings } from "../types/jsonSettings";
import { initAuthData } from "../services/initAuthData";

const initialState: UserSchema = {};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setAuthData: (state, action: PayloadAction<User>) => {
			state.authData = action.payload;
			setFeatureFlags(action.payload.features);
			localStorage.setItem(USER_LOCALSTORAGE_KEY, action.payload.id);
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
		builder.addCase(initAuthData.fulfilled, (state, { payload }: PayloadAction<User>) => {
			state.authData = payload;
			setFeatureFlags(payload.features);
			state._mounted = true;
		});
		builder.addCase(initAuthData.rejected, (state) => {
			state._mounted = true;
		});
	},
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
