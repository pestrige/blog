import { createSelector } from "@reduxjs/toolkit";
import { getUserData } from "entities/User";
import { RoutePaths } from "shared/config";
import { MenuAboutIcon, MenuArticleIcon, MenuMainIcon, MenuProfileIcon } from "shared/assets";
import { useSelector } from "react-redux";
import { MainMenuItemType } from "../types/mainMenu";

const getMenuItems = createSelector(getUserData, (userData) => {
	const mainMenuItems: MainMenuItemType[] = [
		{ path: RoutePaths.main, text: "Главная", Icon: MenuMainIcon },
		{ path: RoutePaths.about, text: "О сайте", Icon: MenuAboutIcon },
	];

	if (userData) {
		mainMenuItems.push(
			{
				path: `${RoutePaths.profile}/${userData.id}`,
				text: "Профиль",
				Icon: MenuProfileIcon,
			},
			{
				path: RoutePaths.articles,
				text: "Статьи",
				Icon: MenuArticleIcon,
			}
		);
	}

	return mainMenuItems;
});

export const useMenuItemsSelector = () => useSelector(getMenuItems);