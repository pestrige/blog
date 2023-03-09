import React, { memo, Suspense, useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import { appRoutes } from "shared/config";
import { PageLoader } from "widgets/PageLoader";
import { useIsAuthSelector } from "entities/User";

export const AppRouter = memo((): JSX.Element => {
	const isAuth = useIsAuthSelector();

	const routes = useMemo(() => appRoutes.filter(({ authOnly }) => !(authOnly && !isAuth)), [isAuth]);

	return (
		<Suspense fallback={<PageLoader />}>
			<Routes>
				{routes.map(({ element, path }) => (
					<Route key={path} path={path} element={element} />
				))}
			</Routes>
		</Suspense>
	);
});
