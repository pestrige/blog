import React, { ButtonHTMLAttributes } from 'react';
import cls from "./Button.module.scss";
import { classNames } from "shared/lib";

export enum ButtonTheme {
	CLEAR = "clear",
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	theme?: ButtonTheme
}

export const Button = ({ children, className, theme, ...otherProps }: Props): JSX.Element => {
	return (
	 <button className={classNames(cls.button, cls[theme], className)} {...otherProps}>
		 {children}
	 </button>
	);
};
