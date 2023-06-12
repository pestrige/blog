import { HTMLAttributes, memo, ReactNode } from "react";
import { classNames } from "@/shared/lib";
import cls from "./Card.module.scss";

type CardVariant = "primary" | "secondary" | "outlined";
type CardPaddings = "none" | "sm" | "md" | "lg";

interface Props extends HTMLAttributes<HTMLElement> {
	children: ReactNode;
	className?: string;
	variant?: CardVariant;
	paddings?: CardPaddings;
}

export const Card = memo(
	({ children, className, variant = "primary", paddings = "lg", ...props }: Props): JSX.Element => {
		return (
			<article {...props} className={classNames(cls.card, cls[variant], cls[paddings], className)}>
				{children}
			</article>
		);
	},
);
