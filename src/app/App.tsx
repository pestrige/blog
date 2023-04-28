import { Suspense } from "react";
import { Navbar, Sidebar } from "@/widgets";
import { AppRouter, ErrorBoundary } from "@/app/providers";
import { useInitUser } from "@/entities/User";

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
