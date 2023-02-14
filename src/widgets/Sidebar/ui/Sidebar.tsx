import React, { useState } from "react";
import { classNames } from "shared/lib";
import { LanguageSwitcher, ThemeSwitcher } from "widgets";
import { useTranslation } from "react-i18next";
import cls from "./Sidebar.module.scss";

interface Props {
	className?: string;
}

export const Sidebar = ({ className = "123" }: Props): JSX.Element => {
	const { t } = useTranslation();
	const [isCollapsed, setIsCollapsed] = useState(false);

	const onToggle = () => setIsCollapsed((prev) => !prev);

	return (
		<div
			data-testid="sidebar-test"
			className={classNames(cls.root, { [cls.collapsed]: isCollapsed }, className)}
		>
			<button data-testid="sidebar-toggle-test" type="button" onClick={onToggle}>
				{t("Переключить")}
			</button>

			<div className={cls.switches}>
				<ThemeSwitcher />
				<LanguageSwitcher />
			</div>
		</div>
	);
};
