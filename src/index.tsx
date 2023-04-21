import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { App } from "app/App";
import { StoreProvider, ThemeProvider } from "app/providers";
import "./shared/config/i18n";

const container = document.getElementById("root");
if (!container) {
	throw new Error("Контейнер root не найден. Не удалось вмонтировать React приложение.");
}

const root = createRoot(container);
root.render(
	<BrowserRouter>
		<StoreProvider>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</StoreProvider>
	</BrowserRouter>
);
