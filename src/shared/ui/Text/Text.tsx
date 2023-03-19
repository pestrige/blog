import { memo } from "react";
import { classNames } from "shared/lib";
import cls from "./Text.module.scss";

type TextVariant = "primary" | "error";
type TextAlign = "left" | "right" | "center";
type TextSize = "md" | "lg";

interface Props {
	className?: string;
	title?: string;
	text?: string;
	variant?: TextVariant;
	align?: TextAlign;
	size?: TextSize;
	inverted?: boolean;
}

export const Text = memo(
	({
		title,
		text,
		className = "",
		variant = "primary",
		align = "left",
		size = "md",
		inverted = false,
	}: Props): JSX.Element => {
		return (
			<div
				className={classNames(className, cls[variant], cls[align], cls[size], {
					[cls.inverted]: inverted,
				})}
			>
				{!!title && <p className={cls.title}>{title}</p>}
				{!!text && <p className={cls.text}>{text}</p>}
			</div>
		);
	}
);
