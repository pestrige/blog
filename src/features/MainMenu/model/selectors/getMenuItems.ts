import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { getUserData } from "@/entities/User";
import { getRoute } from "@/shared/constants";
import {
	MenuAboutIconDeprecated,
	MenuArticleIconDeprecated,
	MenuMainIconDeprecated,
	MenuProfileIconDeprecated,
	MenuAboutIcon,
	MenuArticleIcon,
	MenuMainIcon,
	MenuProfileIcon,
} from "@/shared/assets";
import { MainMenuItemType } from "../types/mainMenu";
import { toggleFeatures } from "@/shared/lib";

const getMenuItems = createSelector(getUserData, (userData) => {
	const mainMenuItems: MainMenuItemType[] = [
		{
			path: getRoute.main(),
			text: "Главная",
			Icon: toggleFeatures({
				name: "isAppRedesigned",
				on: () => MenuMainIcon,
				off: () => MenuMainIconDeprecated,
			}),
		},
		{
			path: getRoute.about(),
			text: "О сайте",
			Icon: toggleFeatures({
				name: "isAppRedesigned",
				on: () => MenuAboutIcon,
				off: () => MenuAboutIconDeprecated,
			}),
		},
	];

	if (userData) {
		mainMenuItems.push(
			{
				path: getRoute.profile(userData.id),
				text: "Профиль",
				Icon: toggleFeatures({
					name: "isAppRedesigned",
					on: () => MenuProfileIcon,
					off: () => MenuProfileIconDeprecated,
				}),
			},
			{
				path: getRoute.articles(),
				text: "Статьи",
				Icon: toggleFeatures({
					name: "isAppRedesigned",
					on: () => MenuArticleIcon,
					off: () => MenuArticleIconDeprecated,
				}),
			},
		);
	}

	return mainMenuItems;
});
export const useMenuItemsSelector = () => useSelector(getMenuItems);
