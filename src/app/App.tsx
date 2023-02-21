import { Suspense } from "react";
import { AppRouter, ErrorBoundary } from "app/providers";
import { Navbar, Sidebar } from "widgets";

import "./styles/index.scss";

export const App = (): JSX.Element => {
	return (
		<div className="app">
			<Suspense fallback="">
				<Navbar />
				<div className="content">
					<Sidebar />
					<ErrorBoundary>
						<AppRouter />
					</ErrorBoundary>
				</div>
			</Suspense>
		</div>
	);
};
