import { ReactNode } from "react";
import { Provider } from "react-redux";
import { ReducersMapObject } from "@reduxjs/toolkit";
import { createReduxStore, StoreSchema } from "@/shared/config";

interface Props {
	children: ReactNode;
	initialState?: DeepPartial<StoreSchema>;
	asyncReducers?: DeepPartial<ReducersMapObject<StoreSchema>>;
}

export const StoreProvider = ({ children, initialState, asyncReducers }: Props): JSX.Element => {
	const store = createReduxStore(
		initialState as StoreSchema,
		asyncReducers as ReducersMapObject<StoreSchema>
	);

	return <Provider store={store}>{children}</Provider>;
};
