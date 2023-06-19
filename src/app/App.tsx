import { Suspense } from "react";
import { Navbar, PageLoader, Sidebar } from "@/widgets";
import { ScrollToTop } from "@/features/ScrollToTop";
import { useInitUser, useIsUserInit } from "@/entities/User";
import { ToggleFeaturesWrapper } from "@/shared/lib";
import { MainLayout } from "@/shared/layouts";

import { AppRouter, ErrorBoundary } from "./providers";
import "./styles/index.scss";

export const App = (): JSX.Element => {
	const isInit = useIsUserInit();
	useInitUser();

	if (!isInit) {
		return <PageLoader />;
	}

	return (
		<ToggleFeaturesWrapper
			featureName="isAppRedesigned"
			on={
				<div className="app-redesigned">
					<Suspense fallback="">
						<MainLayout
							header={<Navbar />}
							content={
								<ErrorBoundary>
									<AppRouter />
								</ErrorBoundary>
							}
							sidebar={<Sidebar />}
							toolbar={<ScrollToTop />}
						/>
					</Suspense>
				</div>
			}
			off={
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
			}
		/>
	);
};
