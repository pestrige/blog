import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { AppLink } from "@/shared/ui";
import { classNames } from "@/shared/lib";
import { MainMenuItemType } from "../../model/types/mainMenu";
import cls from "./MainMenuItem.module.scss";

interface Props {
	collapsed: boolean;
	item: MainMenuItemType;
}

export const MainMenuItemRedesigned = memo(({ collapsed, item }: Props): JSX.Element => {
	const { t } = useTranslation();
	const { path, text, Icon } = item;

	return (
		<AppLink
			activeClassName={classNames(cls.activeRedesigned, { [cls.activeCollapsed]: collapsed })}
			to={path}
			className={classNames(cls.linkRedesigned, { [cls.collapsed]: collapsed })}
		>
			<Icon className={cls.iconRedesigned} />
			<span className={cls.text}>{t(text)}</span>
		</AppLink>
	);
});
