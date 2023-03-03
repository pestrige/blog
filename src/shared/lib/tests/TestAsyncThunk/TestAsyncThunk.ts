import { StoreSchema } from "shared/config";
import { AsyncThunkAction } from "@reduxjs/toolkit";

type ActionCreatorType<ReturnType, ThunkArg, RejectedValue> = (
	arg: ThunkArg
) => AsyncThunkAction<ReturnType, ThunkArg, { rejectValue: RejectedValue }>;

export class TestAsyncThunk<ReturnType, ThunkArg, RejectedValue> {
	actionCreator: ActionCreatorType<ReturnType, ThunkArg, RejectedValue>;

	dispatch: jest.MockedFn<any>;

	getState: () => StoreSchema;

	constructor(actionCreator: ActionCreatorType<ReturnType, ThunkArg, RejectedValue>) {
		this.actionCreator = actionCreator;
		this.dispatch = jest.fn();
		this.getState = jest.fn();
	}

	async callThunk(arg: ThunkArg) {
		const action = this.actionCreator(arg);

		return action(this.dispatch, this.getState, undefined);
	}
}
