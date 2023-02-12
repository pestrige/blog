import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { appRoutes } from 'shared/config';

export const AppRouter = (): JSX.Element => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				{appRoutes.map(({ element, path }) => (<Route key={path} path={path} element={element} />))}
			</Routes>
		</Suspense>
	);
};
