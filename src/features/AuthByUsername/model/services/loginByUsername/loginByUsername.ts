import { createAsyncThunk } from "@reduxjs/toolkit";
import { User, userActions } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/constants";
import { ThunkConfig } from "shared/config";

interface AuthData {
	username: string;
	password: string;
}

export const loginByUsername = createAsyncThunk<User, AuthData, ThunkConfig<string>>(
	"login/loginByUsername",
	async (authData, thunkAPI) => {
		const { rejectWithValue, dispatch, extra } = thunkAPI;
		try {
			const response = await extra.api.post<User>("/login", authData);

			if (!response.data) {
				return rejectWithValue("Не удалось залогиниться");
			}

			localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
			dispatch(userActions.setAuthData(response.data));
			return response.data;
		} catch (e) {
			return rejectWithValue("Не удалось залогиниться");
		}
	}
);
