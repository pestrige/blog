import { StoreSchema } from "shared/config";
import { AsyncThunkAction } from "@reduxjs/toolkit";
import axios, { AxiosStatic } from "axios";

type ActionCreatorType<ReturnType, ThunkArg, RejectedValue> = (
	arg: ThunkArg
) => AsyncThunkAction<ReturnType, ThunkArg, { rejectValue: RejectedValue }>;

jest.mock("axios");

const mockedAxios = jest.mocked(axios, true);

export class TestAsyncThunk<ReturnType, ThunkArg, RejectedValue> {
	actionCreator: ActionCreatorType<ReturnType, ThunkArg, RejectedValue>;

	api: jest.MockedFunctionDeep<AxiosStatic>;

	dispatch: jest.MockedFn<any>;

	getState: () => StoreSchema;

	navigate: jest.MockedFn<any>;

	constructor(
		actionCreator: ActionCreatorType<ReturnType, ThunkArg, RejectedValue>,
		state?: DeepPartial<StoreSchema>
	) {
		this.actionCreator = actionCreator;
		this.dispatch = jest.fn();
		this.getState = jest.fn(() => state as StoreSchema);

		this.api = mockedAxios;
		this.navigate = jest.fn();
	}

	async callThunk(arg: ThunkArg) {
		const action = this.actionCreator(arg);

		return action(this.dispatch, this.getState, { api: this.api, navigate: this.navigate });
	}
}
