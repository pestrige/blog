import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { App } from "app/App";
import { StoreProvider, ThemeProvider } from "app/providers";

import "./shared/config/i18n";

render(
	<StoreProvider>
		<BrowserRouter>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</StoreProvider>,
	document.getElementById("root")
);
