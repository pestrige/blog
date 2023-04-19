import React, { ButtonHTMLAttributes, memo } from "react";
import { classNames } from "shared/lib";
import cls from "./Button.module.scss";

export enum ButtonTheme {
	CLEAR = "clear",
	CLEAR_INVERTED = "clearInverted",
	OUTLINE = "outline",
	OUTLINE_ERROR = "outlineError",
	BACKGROUND = "background",
	BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
	M = "M",
	L = "L",
	XL = "XL",
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	theme?: ButtonTheme;
	square?: boolean;
	size?: ButtonSize;

	dataTestId?: string;
}

export const Button = memo(
	({
		children,
		className,
		theme = ButtonTheme.OUTLINE,
		square = false,
		size = ButtonSize.M,
		dataTestId,
		...otherProps
	}: Props): JSX.Element => {
		const classes = classNames(cls.button, cls[theme], cls[size], { [cls.square]: square }, className);

		return (
			<button
				data-testid={dataTestId ?? "button-test"}
				type="button"
				className={classes}
				{...otherProps}
			>
				{children}
			</button>
		);
	}
);
