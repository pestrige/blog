import { Suspense } from "react";
import { Navbar, PageLoader, Sidebar } from "@/widgets";
import { useInitUser, useIsUserInit } from "@/entities/User";
import { AppRouter, ErrorBoundary } from "./providers";

import "./styles/index.scss";

export const App = (): JSX.Element => {
	const isInit = useIsUserInit();
	useInitUser();

	if (!isInit) {
		return <PageLoader />;
	}

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
