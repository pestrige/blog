import { ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore, StoreSchema } from "shared/config";

interface Props {
	children: ReactNode;
	initialState?: StoreSchema;
}

export const StoreProvider = ({ children, initialState }: Props): JSX.Element => {
	const store = createReduxStore(initialState);

	return <Provider store={store}>{children}</Provider>;
};
