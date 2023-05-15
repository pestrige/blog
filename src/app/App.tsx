import { Suspense } from "react";
import { Navbar, Sidebar } from "@/widgets";
import { useInitUser } from "@/entities/User";
import { AppRouter, ErrorBoundary } from "./providers";

import "./styles/index.scss";

export const App = (): JSX.Element => {
	useInitUser();

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
