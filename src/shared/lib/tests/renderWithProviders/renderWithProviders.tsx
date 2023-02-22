import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18nForTests from "shared/config/i18n/i18nForTests";
import { MemoryRouter } from "react-router-dom";
import { StoreProvider } from "app/providers";
import { DeepPartial } from "@reduxjs/toolkit";
import { StoreSchema } from "shared/config";

export interface Props {
	route?: string;
	initialState?: DeepPartial<StoreSchema>;
}

export function renderWithProviders(component: ReactNode, options: Props = {}) {
	const { route = "/", initialState } = options;

	return render(
		<StoreProvider initialState={initialState}>
			<MemoryRouter initialEntries={[route]}>
				<I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
			</MemoryRouter>
		</StoreProvider>
	);
}
