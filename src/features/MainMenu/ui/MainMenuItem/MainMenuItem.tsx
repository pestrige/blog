import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { AppLink, AppLinkTheme } from "@/shared/ui";
import { classNames } from "@/shared/lib";
import { MainMenuItemType } from "../../model/types/mainMenu";
import cls from "./MainMenuItem.module.scss";

interface Props {
	collapsed: boolean;
	item: MainMenuItemType;
}

export const MainMenuItem = memo(({ collapsed, item }: Props): JSX.Element => {
	const { t } = useTranslation();
	const { path, text, Icon } = item;

	return (
		<AppLink
			to={path}
			theme={AppLinkTheme.SECONDARY}
			className={classNames(cls.link, { [cls.collapsed]: collapsed })}
		>
			<Icon className={cls.icon} />
			<span className={cls.text}>{t(text)}</span>
		</AppLink>
	);
});
