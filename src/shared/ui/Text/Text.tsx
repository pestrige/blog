import { memo } from "react";
import { classNames } from "shared/lib";
import cls from "./Text.module.scss";

export enum TextTheme {
	PRIMARY = "primary",
	ERROR = "error",
}

type TextAlign = "left" | "right" | "center";

interface Props {
	className?: string;
	title?: string;
	text?: string;
	theme?: TextTheme;
	align?: TextAlign;
}

export const Text = memo(
	({ title, text, className = "", theme = TextTheme.PRIMARY, align = "left" }: Props): JSX.Element => {
		return (
			<div className={classNames(className, cls[theme], cls[align])}>
				{!!title && <p className={cls.title}>{title}</p>}
				{!!text && <p className={cls.text}>{text}</p>}
			</div>
		);
	}
);
