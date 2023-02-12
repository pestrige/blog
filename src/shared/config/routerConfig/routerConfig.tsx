import { RouteProps } from 'react-router-dom';
import { AboutPage, MainPage } from 'pages';

export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
}

export const RoutePaths: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: { element: <MainPage />, path: RoutePaths.main },
	[AppRoutes.ABOUT]: { element: <AboutPage />, path: RoutePaths.about },
};

export const appRoutes: RouteProps[] = Object.values(routeConfig);
