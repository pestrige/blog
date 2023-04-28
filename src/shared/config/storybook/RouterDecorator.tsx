import { Story, StoryContext } from "@storybook/react";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import { PageLoader } from "@/widgets";

interface Router {
	path: string;
	route: string;
}

export const RouterDecorator = (StoryComponent: Story, { parameters }: StoryContext) => {
	const router: Router | undefined = parameters?.router;

	if (!router) {
		return (
			<BrowserRouter>
				<StoryComponent />
			</BrowserRouter>
		);
	}

	return (
		<MemoryRouter initialEntries={[encodeURI(router.route)]}>
			<Suspense fallback={<PageLoader />}>
				<Routes>
					<Route path={router.path} element={<StoryComponent />} />
				</Routes>
			</Suspense>
		</MemoryRouter>
	);
};
