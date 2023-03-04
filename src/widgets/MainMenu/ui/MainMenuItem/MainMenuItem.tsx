import React, { memo } from "react";
import { AppLink, AppLinkTheme } from "shared/ui";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib";
import cls from "./MainMenuItem.module.scss";
import { MainMenuItemType } from "../../model/menuItems";

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
