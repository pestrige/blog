import React, { ButtonHTMLAttributes } from "react";
import { classNames } from "shared/lib";
import cls from "./Button.module.scss";

export enum ButtonTheme {
	CLEAR = "clear",
	OUTLINE = "outline",
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	theme?: ButtonTheme;
}

export const Button = ({ children, className, theme, ...otherProps }: Props): JSX.Element => {
	return (
		<button
			data-testid="button-test"
			type="button"
			className={classNames(cls.button, cls[theme], className)}
			{...otherProps}
		>
			{children}
		</button>
	);
};
