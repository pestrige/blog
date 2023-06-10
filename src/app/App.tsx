import { Suspense } from "react";
import { Navbar, PageLoader, Sidebar } from "@/widgets";
import { useInitUser, useIsUserInit } from "@/entities/User";
import { AppRouter, ErrorBoundary } from "./providers";

import "./styles/index.scss";
import { ToggleFeaturesWrapper } from "@/shared/lib";
import { MainLayout } from "@/shared/layouts";

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
							toolbar={<div>1242354355</div>}
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
