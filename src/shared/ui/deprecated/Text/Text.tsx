import { memo } from "react";
import { classNames } from "@/shared/lib";
import cls from "./Text.module.scss";

type TextVariant = "primary" | "secondary" | "error";
type TextAlign = "left" | "right" | "center";
type TextSize = "sm" | "md" | "lg";
type TitleTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

interface Props {
	className?: string;
	title?: string;
	text?: string;
	titleTag?: TitleTag;
	variant?: TextVariant;
	align?: TextAlign;
	size?: TextSize;
	inverted?: boolean;
}

/**
 * @deprecated
 */

export const Text = memo(
	({
		title,
		titleTag = "p",
		text,
		className = "",
		variant = "primary",
		align = "left",
		size = "md",
		inverted = false,
	}: Props): JSX.Element => {
		const TitleTag = titleTag;
		return (
			<div
				className={classNames(className, cls[variant], cls[align], cls[size], {
					[cls.inverted]: inverted,
				})}
			>
				{!!title && <TitleTag className={cls.title}>{title}</TitleTag>}
				{!!text && <p className={cls.text}>{text}</p>}
			</div>
		);
	},
);
