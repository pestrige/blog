import React from "react";
import { classNames } from "shared/lib";
import { AppLink, AppLinkTheme } from "shared/ui";
import { useTranslation } from "react-i18next";
import { RoutePaths } from "shared/config";
import { MenuAboutIcon, MenuMainIcon } from "shared/assets";
import cls from "./MainMenu.module.scss";

interface Props {
	className?: string;
	isCollapsed: boolean;
}

export const MainMenu = ({ className, isCollapsed }: Props): JSX.Element => {
	const { t } = useTranslation();

	return (
		<nav className={classNames(cls.wrapper, { [cls.collapsed]: isCollapsed }, className)}>
			<ul className={cls.links}>
				<li className={cls.linkWrapper}>
					<AppLink to={RoutePaths.main} theme={AppLinkTheme.SECONDARY} className={cls.link}>
						<MenuMainIcon className={cls.icon} />
						<span className={cls.text}>{t("Главная")}</span>
					</AppLink>
				</li>

				<li className={cls.linkWrapper}>
					<AppLink to={RoutePaths.about} theme={AppLinkTheme.SECONDARY} className={cls.link}>
						<MenuAboutIcon className={cls.icon} />
						<span className={cls.text}>{t("О сайте")}</span>
					</AppLink>
				</li>
			</ul>
		</nav>
	);
};
