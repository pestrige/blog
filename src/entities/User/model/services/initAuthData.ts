import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/config";
import { USER_LOCALSTORAGE_KEY } from "@/shared/constants";
import { getUserDataByIdQuery } from "../../api/userApi";
import { User } from "../types/user";

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
	"user/initAuthData",
	async (_, thunkAPI) => {
		const { rejectWithValue, dispatch } = thunkAPI;
		const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

		if (!userId) {
			return rejectWithValue("error");
		}

		try {
			const response = await dispatch(getUserDataByIdQuery(userId)).unwrap();

			if (!response) {
				return rejectWithValue("error");
			}
			return response;
		} catch (e) {
			return rejectWithValue("error");
		}
	},
);
