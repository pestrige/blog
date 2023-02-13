import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { appRoutes } from "shared/config";
import { PageLoader } from "widgets/PageLoader";

export const AppRouter = (): JSX.Element => {
	return (
		<Suspense fallback={<PageLoader />}>
			<Routes>
				{appRoutes.map(({ element, path }) => (
					<Route key={path} path={path} element={element} />
				))}
			</Routes>
		</Suspense>
	);
};
