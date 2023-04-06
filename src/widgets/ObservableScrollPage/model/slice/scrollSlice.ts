import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ScrollSchema } from "../types/scrollSchema";

const initialState: ScrollSchema = {
	scroll: {},
};

export const scrollSlice = createSlice({
	name: "scrollSlice",
	initialState,
	reducers: {
		setScrollPosition: (state, { payload }: PayloadAction<{ path: string; position: number }>) => {
			state.scroll[payload.path] = payload.position;
		},
	},
});

export const { actions: scrollActions } = scrollSlice;
export const { reducer: scrollReducer } = scrollSlice;
