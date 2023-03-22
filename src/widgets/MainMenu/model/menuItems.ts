import React from "react";
import { RoutePaths } from "shared/config";
import { MenuAboutIcon, MenuArticleIcon, MenuMainIcon, MenuProfileIcon } from "shared/assets";

export interface MainMenuItemType {
	path: string;
	text: string;
	Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
	isAuthOnly?: boolean;
	isPathId?: boolean;
}

export const mainMenuItems: MainMenuItemType[] = [
	{ path: RoutePaths.main, text: "Главная", Icon: MenuMainIcon },
	{ path: RoutePaths.about, text: "О сайте", Icon: MenuAboutIcon },
	{ path: RoutePaths.profile, text: "Профиль", Icon: MenuProfileIcon, isAuthOnly: true, isPathId: true },
	{ path: RoutePaths.articles, text: "Статьи", Icon: MenuArticleIcon, isAuthOnly: true },
];
