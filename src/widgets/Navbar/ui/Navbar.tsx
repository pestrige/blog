import React from 'react';
import { classNames } from "shared/lib";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui";

interface Props {
	className?: string
}

export const Navbar = ({ className }: Props): JSX.Element => {
	return (
	 <nav className={classNames(cls.wrapper, className)}>
		 <ul className={cls.links}>
			 <li className={cls.mainLink}><AppLink to="/" theme={AppLinkTheme.SECONDARY}>Главная</AppLink></li>
			 <li><AppLink to="/about" theme={AppLinkTheme.SECONDARY}>О сайте</AppLink></li>
		 </ul>
	 </nav>
	);
};
