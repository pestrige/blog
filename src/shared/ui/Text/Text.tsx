import { memo } from "react";
import { classNames } from "shared/lib";
import cls from "./Text.module.scss";

export enum TextTheme {
	PRIMARY = "primary",
	ERROR = "error",
}

interface Props {
	className?: string;
	title?: string;
	text?: string;
	theme?: TextTheme;
}

export const Text = memo(
	({ title, text, className = "", theme = TextTheme.PRIMARY }: Props): JSX.Element => {
		return (
			<div className={classNames(className, cls[theme])}>
				{!!title && <p className={cls.title}>{title}</p>}
				{!!text && <p className={cls.text}>{text}</p>}
			</div>
		);
	}
);
