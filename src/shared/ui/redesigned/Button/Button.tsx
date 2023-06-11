import React, { ButtonHTMLAttributes, memo } from "react";
import { classNames } from "@/shared/lib";
import cls from "./Button.module.scss";

export type ButtonVariant = "clear" | "outline";

export type ButtonSize = "M" | "L" | "XL";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	square?: boolean;
	size?: ButtonSize;
	fullWidth?: boolean;

	dataTestId?: string;
}

export const Button = memo(
	({
		children,
		className,
		variant = "outline",
		square = false,
		size = "M",
		dataTestId,
		fullWidth = false,
		...otherProps
	}: Props): JSX.Element => {
		const classes = classNames(
			cls.button,
			cls[variant],
			cls[size],
			{
				[cls.square]: square,
				[cls.full]: fullWidth,
			},
			className,
		);

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
	},
);
