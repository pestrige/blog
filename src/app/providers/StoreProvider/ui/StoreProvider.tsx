import { ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore, StoreSchema } from "shared/config";
import { DeepPartial } from "@reduxjs/toolkit";

interface Props {
	children: ReactNode;
	initialState?: DeepPartial<StoreSchema>;
}

export const StoreProvider = ({ children, initialState }: Props): JSX.Element => {
	const store = createReduxStore(initialState as StoreSchema);

	return <Provider store={store}>{children}</Provider>;
};
