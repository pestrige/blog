import React, { memo, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { appRoutes } from "@/shared/config";
import { PageLoader } from "@/widgets/PageLoader";
import { useUserIsMountedSelector } from "@/entities/User";
import { RouteElement } from "./RouteElement";

export const AppRouter = memo((): JSX.Element | null => {
	const isUserMounted = useUserIsMountedSelector();

	if (!isUserMounted) {
		return null;
	}

	return (
		<Suspense fallback={<PageLoader />}>
			<Routes>
				{appRoutes.map(({ path, ...routeProps }) => (
					<Route key={path} path={path} element={<RouteElement {...routeProps} />} />
				))}
			</Routes>
		</Suspense>
	);
});
