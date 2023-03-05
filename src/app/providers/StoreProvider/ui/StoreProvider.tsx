import { ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore, StoreSchema } from "shared/config";
import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

interface Props {
	children: ReactNode;
	initialState?: DeepPartial<StoreSchema>;
	asyncReducers?: DeepPartial<ReducersMapObject<StoreSchema>>;
}

export const StoreProvider = ({ children, initialState, asyncReducers }: Props): JSX.Element => {
	const navigate = useNavigate();
	const store = createReduxStore(
		initialState as StoreSchema,
		asyncReducers as ReducersMapObject<StoreSchema>,
		navigate
	);
	return <Provider store={store}>{children}</Provider>;
};
