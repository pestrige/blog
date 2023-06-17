import React, { ButtonHTMLAttributes, memo } from "react";
import { classNames } from "@/shared/lib";
import { Loader } from "../Loader";
import cls from "./Button.module.scss";

export type ButtonVariant = "clear" | "outline" | "rounded-outline";

export type ButtonSize = "M" | "L" | "XL";
type BorderColor = "red" | "green" | "default";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	borderColor?: BorderColor;
	square?: boolean;
	size?: ButtonSize;
	fullWidth?: boolean;
	isLoading?: boolean;

	dataTestId?: string;
}

export const Button = memo(
	({
		children,
		className,
		variant = "outline",
		borderColor = "default",
		square = false,
		size = "M",
		dataTestId,
		fullWidth = false,
		isLoading,
		...otherProps
	}: Props): JSX.Element => {
		const classes = classNames(
			cls.button,
			cls[variant],
			cls[borderColor],
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
				{isLoading ? <Loader size="S" className={cls.loader} /> : children}
			</button>
		);
	},
);
