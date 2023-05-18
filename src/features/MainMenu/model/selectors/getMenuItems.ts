import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { getUserData } from "@/entities/User";
import { getRoute } from "@/shared/constants";
import { MenuAboutIcon, MenuArticleIcon, MenuMainIcon, MenuProfileIcon } from "@/shared/assets";
import { MainMenuItemType } from "../types/mainMenu";

const getMenuItems = createSelector(getUserData, (userData) => {
	const mainMenuItems: MainMenuItemType[] = [
		{ path: getRoute.main(), text: "Главная", Icon: MenuMainIcon },
		{ path: getRoute.about(), text: "О сайте", Icon: MenuAboutIcon },
	];

	if (userData) {
		mainMenuItems.push(
			{
				path: getRoute.profile(userData.id),
				text: "Профиль",
				Icon: MenuProfileIcon,
			},
			{
				path: getRoute.articles(),
				text: "Статьи",
				Icon: MenuArticleIcon,
			}
		);
	}

	return mainMenuItems;
});

export const useMenuItemsSelector = () => useSelector(getMenuItems);
